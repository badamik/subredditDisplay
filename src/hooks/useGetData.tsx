import { useState } from 'react';

const useGetData = () => {
  const [isLoading, setIsLoading] = useState<boolean>();

  const getData = (url: string) => {
    setIsLoading(true);
    return fetch(url)
      .then((response) => response.json())
      .finally(() => setIsLoading(false));
  };

  return { isLoading, getData };
};

export default useGetData;
