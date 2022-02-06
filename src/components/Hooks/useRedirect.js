import { useHistory } from 'react-router';

const useRedirect = () => {
  const history = useHistory();

  const redirect = (location) => {
    history.push(location);
  };
  return { redirect };
};

export default useRedirect;
