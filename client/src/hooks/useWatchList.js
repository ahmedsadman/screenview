import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import API from '../api';


const useWatchList = () => {
  const [watchList, setWatchList] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  const addToWatchList = async (title, type, mediaId) => {
    const token = await getAccessTokenSilently();
    const api = new API(token);
    await api.addToWatchList(title, type, mediaId);
    const res = await api.getUser();
    setWatchList(res.user.watchList);
    console.log('watchList is', res.user.watchList);
  }

  return { addToWatchList };
};

export default useWatchList;
