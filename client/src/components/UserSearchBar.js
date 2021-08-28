import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickOutside } from 'react-click-outside-hook';
import MoonLoader from 'react-spinners/MoonLoader';
import { SearchIcon } from '@heroicons/react/outline';
import People from './People';

const SearchBarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 20rem;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
  @media (max-width: 1190px) {
    width: 15rem;
  }
`;

const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 23px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #dfdfdf;
  }
`;

const LineSeperator = styled.span`
  display: flex;
  min-width: 100%;
  min-height: 2px;
  background-color: #d8d8d878;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const containerVariants = {
  expanded: {
    height: '30em',
    position: 'absolute',
  },
  collapsed: {
    height: '2.7em',
    position: 'absolute',
  },
};

const UserSearchBar = ({
  users,
  actionHandler,
  searchQuery,
  onChangeSearchQuery,
}) => {
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef();
  const [isLoading, setLoading] = useState(false);
  const isEmpty = !users || users.length === 0;

  const expandContainer = () => {
    setExpanded(true);
  };

  const collapseContainer = () => {
    setExpanded(false);
    setLoading(false);
    onChangeSearchQuery({
      target: {
        value: '',
      },
    });
    if (inputRef.current) inputRef.current.value = '';
  };

  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);

  return (
    <div className="flex justify-center mb-10 mt-5">
      <SearchBarContainer
        animate={isExpanded ? 'expanded' : 'collapsed'}
        variants={containerVariants}
        ref={parentRef}
        className="border-2 border-gray-300 "
      >
        <div className="mx-auto z-0 text-gray-600 flex items-center">
          <SearchIcon
            className="p-2 items-center text-center h-10 w-10"
            aria-hidden="true"
          />
          <input
            className="w-full pr-24 rounded-md text-sm focus:outline-none hover:border-gray-600"
            placeholder="Search"
            onFocus={expandContainer}
            ref={inputRef}
            value={searchQuery}
            onChange={onChangeSearchQuery}
          />

          <AnimatePresence>
            {isExpanded && (
              <CloseIcon
                key="close-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={collapseContainer}
                transition={{ duration: 0.2 }}
              >
                <IoClose />
              </CloseIcon>
            )}
          </AnimatePresence>
        </div>

        {isExpanded && <LineSeperator />}
        {isExpanded && (
          <div className="overflow-y-auto">
            {isLoading && (
              <LoadingWrapper>
                <MoonLoader loading color="#000" size={20} />
              </LoadingWrapper>
            )}
            {!isLoading && !isEmpty && (
              <>
                {users.map((user) => (
                  <People
                    user={user}
                    key={user._id}
                    actionHandler={actionHandler}
                  />
                ))}
              </>
            )}
          </div>
        )}
      </SearchBarContainer>
    </div>
  );
};

export default UserSearchBar;
