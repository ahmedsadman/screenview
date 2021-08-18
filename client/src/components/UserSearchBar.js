import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { IoClose } from 'react-icons/io5'
import { AnimatePresence, motion } from 'framer-motion'
import { useClickOutside } from 'react-click-outside-hook'
import MoonLoader from 'react-spinners/MoonLoader'
import axios from 'axios'
import { useDebounce } from '../hooks/debounceHook'
import { SearchIcon } from '@heroicons/react/outline'
import People from './People'

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
		height: "30em",
		position: "fixed",

	},
	collapsed: {
		height: "2.7em",
		position: "fixed"
	},
}


const UserSearchBar = ({ keyword, selectHandler }) => {

	const key = process.env.REACT_APP_TMDB_KEY

	const [isExpanded, setExpanded] = useState(false)
	const [parentRef, isClickedOutside] = useClickOutside()
	const inputRef = useRef()
	const [searchQuery, setSearchQuery] = useState("")
	const [isLoading, setLoading] = useState(false)
	const [allUsers, setAllUsers] = useState([])
	const [noTvShows, setNoTvShows] = useState(false)

	const fromSearch = useState(true)

	const isEmpty = !allUsers || allUsers.length === 0

	const changeHandler = (e) => {
		e.preventDefault()
		if (e.target.value.trim() === "") setNoTvShows(false)

		setSearchQuery(e.target.value)
	}

	const expandContainer = () => {
		setExpanded(true)
	}

	const collapseContainer = () => {
		setExpanded(false)
		setSearchQuery("")
		setLoading(false)
		setNoTvShows(false)
		setAllUsers([])
		if (inputRef.current) inputRef.current.value = ""
	}

	useEffect(() => {
		if (isClickedOutside) collapseContainer()
	}, [isClickedOutside])

	const prepareSearchQuery = (query) => {
		//TODO: replace it with user api
		const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`

		return encodeURI(url)
	}

	const searchTvShow = async () => {
		if (!searchQuery || searchQuery.trim() === "") return

		setLoading(true)
		setNoTvShows(false)

		const URL = prepareSearchQuery(searchQuery)

		const response = await axios.get(URL).catch((err) => {
			console.log("Error: ", err)
		})

		const responseList = response.data

		if (response) {
			if (responseList && responseList.length === 0) setNoTvShows(true)

			setAllUsers(responseList.results)
		}

		setLoading(false)
	}

	useDebounce(searchQuery, 500, searchTvShow)


	return (
		<div className="flex justify-center mb-10 mt-10">
			<SearchBarContainer
				animate={isExpanded ? "expanded" : "collapsed"}
				variants={containerVariants}
				ref={parentRef}
				className="border-2 border-gray-300 "
			>
				<div className="mx-auto z-0 text-gray-600 flex items-center">
					<SearchIcon className="p-2 items-center text-center h-10 w-10" aria-hidden="true" />
					<input className="w-full pr-24 rounded-md text-sm focus:outline-none hover:border-gray-600"
						placeholder="Search" onFocus={expandContainer} ref={inputRef} value={searchQuery} onChange={changeHandler} />

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
								{allUsers.map(show => (
									<People user={show} />
								))}
							</>
						)}
					</div>
				)}

			</SearchBarContainer>
		</div>
	)
}

export default UserSearchBar
