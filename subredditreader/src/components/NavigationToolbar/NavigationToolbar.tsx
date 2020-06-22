import React, { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';
import { MAX_ITEMS } from '../../Views/MainView';
import { ExtraRequestParam } from '../../ts/interfaces';
import './styles.scss';

const NavigationToolbar: FunctionComponent<Props> = ({
  after,
  before,
  handleSearchClicked,
  count,
  setCount,
}) => {
  return (
    <div className="navigationToolbar">
      {before && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleSearchClicked({
              name: 'before',
              value: before,
            }).then(() => setCount(count - MAX_ITEMS));
          }}
        >
          Back
        </Button>
      )}
      {after && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleSearchClicked({
              name: 'after',
              value: after,
            }).then(() => setCount(count + MAX_ITEMS));
          }}
        >
          Next
        </Button>
      )}
    </div>
  );
};

interface Props {
  after: string | null;
  before: string | null;
  handleSearchClicked: (extraParam: ExtraRequestParam | null) => Promise<void>;
  setCount: (count: number) => void;
  count: number;
}

export default NavigationToolbar;
