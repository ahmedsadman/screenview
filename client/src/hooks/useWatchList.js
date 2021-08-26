import { useEffect, useState } from 'react';
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
  }

  const fetchWatchList = async () => {
    const token = await getAccessTokenSilently();
    const api = new API(token);
    const res = await api.getUser();
    const { watchList } = res.user;
    setWatchList(watchList);
  }

  const removeFromWatchList = async (mediaId) => {
    const token = await getAccessTokenSilently();
    const api = new API(token);
    await api.removeFromWatchList(mediaId);
    fetchWatchList();
  }

  useEffect(() => {
    fetchWatchList();
  }, []);

  return { watchList, addToWatchList, removeFromWatchList };
};

export default useWatchList;
