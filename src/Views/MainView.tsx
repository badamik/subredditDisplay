import React, { useState } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import TextInput from '../components/Input/TextInput';
import DataTable from '../components/DataTable/DataTable';
import NavigationToolbar from '../components/NavigationToolbar/NavigationToolbar';
import useGetData from '../hooks/useGetData';
import { REDDIT_API } from '../config.json';
import {
  SubRedditResponse,
  SubRedditEntity,
  ExtraRequestParam,
  SubRedditTableData,
} from '../ts/interfaces';
import './styles.scss';

export const MAX_ITEMS = 10;

const MainView = () => {
  const [inputVal, setInputVal] = useState<string>('');
  const [data, setData] = useState<SubRedditTableData[]>();
  const { getData, isLoading } = useGetData();
  const [after, setAfter] = useState<string | null>('');
  const [before, setBefore] = useState<string | null>('');
  const [count, setCount] = useState<number>(0);

  const handleValueChange = (event: any) => {
    setInputVal(event.target.value);
  };

  const handleSearchClicked = (extraParam: ExtraRequestParam | null) => {
    const param = extraParam
      ? `&${extraParam.name}=${extraParam.value}&count=${
          extraParam.name === 'before' ? count - MAX_ITEMS : count + MAX_ITEMS
        }`
      : '';
    return getData(`${REDDIT_API}${inputVal}.json?limit=${MAX_ITEMS}${param}`)
      .then((data: SubRedditResponse) => {
        setAfter(data.data.after);
        setBefore(data.data.before);
        return data.data.children;
      })
      .then((res) =>
        res.map((subReddit: SubRedditEntity) => {
          return {
            id: subReddit.data.id,
            title: subReddit.data.title,
            url: subReddit.data.url,
            author: subReddit.data.author,
            score: subReddit.data.score,
          };
        }),
      )
      .then((data) => setData(data));
  };

  return (
    <>
      <div className="searchWrapper">
        <TextInput value={inputVal} handleValueChange={handleValueChange} />
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            handleSearchClicked(null).then(() => setCount(MAX_ITEMS))
          }
        >
          Search
        </Button>
      </div>
      <div>
        {isLoading && <CircularProgress />}
        {!isLoading && data && (
          <>
            <DataTable data={data} />
            <NavigationToolbar
              after={after}
              before={before}
              handleSearchClicked={handleSearchClicked}
              setCount={setCount}
              count={count}
            />
          </>
        )}
      </div>
    </>
  );
};

export default MainView;
