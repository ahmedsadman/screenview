import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import API from '../api';

const PostLogin = () => {
  const { getAccessTokenSilently, user } = useAuth0();
  const [redirect, setRedirect] = useState(false);

  const updateUser = async () => {
    const token = await getAccessTokenSilently();
    const api = new API(token);

    await api.updateUser(user.name, user.email, user.picture);
    console.log('user updated');
    setRedirect(true);
  };

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <div>
      <div>Please wait</div>
      {redirect && <Redirect to='/feed' />}
    </div>
  );
}

export default PostLogin;