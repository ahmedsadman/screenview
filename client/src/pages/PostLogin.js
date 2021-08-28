import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import API from '../api';

const PostLogin = () => {
  const { getAccessTokenSilently, user } = useAuth0();
  const [redirectFeed, setRedirectFeed] = useState(false);
  const [redirectProfile, setRedirectProfile] = useState(false);

  const updateUser = async () => {
    const token = await getAccessTokenSilently();
    const api = new API(token);
    const _user = await api.getUser();

    if (_user.found) {
      if (!_user.user.name || !_user.user.email) {
        await api.updateUser(user.name, user.email, user.picture);
      }
      setRedirectFeed(true);
    } else {
      await api.createUser(user.email);
      await api.updateUser(user.name, user.email, user.picture);
      setRedirectProfile(true);
    }
  };

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <div>
      <div>Please wait</div>
      {redirectFeed && <Redirect to="/feed" />}
      {redirectProfile && <Redirect to="/profile" />}
    </div>
  );
};

export default PostLogin;
