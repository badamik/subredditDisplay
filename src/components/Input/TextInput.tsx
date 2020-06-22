import React, { FunctionComponent } from 'react';
import { TextField } from '@material-ui/core';

const TextInput: FunctionComponent<Props> = ({ value, handleValueChange }) => (
  <TextField
    value={value}
    onChange={handleValueChange}
    InputProps={{
      style: {
        color: 'white',
      },
    }}
    label="Type subreddit"
  />
);

interface Props {
  value: string;
  handleValueChange: (val: any) => void;
}
export default TextInput;
