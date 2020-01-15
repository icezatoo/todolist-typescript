import { ID } from '@datorama/akita';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { Todo } from '../todo/state/todo.model';

interface IListProp {
  todoList: Todo[];
  clickRemove: (id: ID) => void;
  onChangeCheckbox: (id: ID) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      '& .MuiListItemText-root': {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
  }),
);

const CheckBoxList: React.FC<IListProp> = ({
  todoList,
  onChangeCheckbox,
  clickRemove,
}) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {todoList.map(value => {
        const labelId = `checkbox-list-label-${value.id}`;
        return (
          <ListItem key={value.id} role={undefined} dense button>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={value.completed}
                tabIndex={-1}
                disableRipple
                onChange={() => onChangeCheckbox(value.id)}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText
              id={labelId}
              title={value.text}
              primary={value.text}
              style={{
                textDecoration: value.completed ? 'line-through' : 'none',
              }}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => clickRemove(value.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CheckBoxList;
