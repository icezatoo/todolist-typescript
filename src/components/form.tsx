import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';

interface IForm {
  onChange: (filter: string) => void;
  selectFilter: string | undefined;
  onAdd: (text: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    groupRow: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }),
);

const optionMode = [
  {
    value: 'SHOW_ALL',
    label: 'ALL',
  },
  {
    value: 'SHOW_ACTIVE',
    label: 'Active',
  },
  {
    value: 'SHOW_COMPLETED',
    label: 'Completed',
  },
];

const Form: React.FC<IForm> = ({ onAdd, selectFilter, onChange }) => {
  const classes = useStyles();
  const [text, setText] = useState('');

  const handleEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const resetValue = () => {
    setText('');
  };

  const changeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    onAdd(text);
    resetValue();
    ev.preventDefault();
  };

  return (
    <form className={classes.root} onSubmit={onSubmit} autoComplete="off">
      <div className={classes.groupRow}>
        <TextField
          id="outlined-basic"
          style={{
            width: '80%',
          }}
          value={text}
          label="Add todo"
          variant="outlined"
          onChange={handleEvent}
          onBlur={resetValue}
        />
        <TextField
          id="outlined-select"
          select
          style={{
            width: '200px',
          }}
          label="Filter By"
          variant="outlined"
          value={selectFilter}
          onChange={changeFilter}
        >
          {optionMode.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
};
export default Form;
