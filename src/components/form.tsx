import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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

const Form = () => {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <div className={classes.groupRow}>
        <TextField
          id="outlined-basic"
          style={{
            width: '80%',
          }}
          label="Add todo"
          variant="outlined"
        />
        <TextField
          id="outlined-select"
          select
          style={{
            width: '200px',
          }}
          label="Filter By"
          variant="outlined"
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
