
import { Todo, VISIBILITY_FILTER as v } from '../todo/state/todo.model';
import { todosQuery } from '../todo/state/todo.query';
import { TodosService, todosService } from '../todo/state/todo.service';
import { useObservable } from './useObservable';

export type TodoHookTuple = [string, Todo[], TodosService];

export function useTodoHook(): TodoHookTuple {
  const [todoList] = useObservable(todosQuery.selectVisibleTodos$, []);
  const [selectFilter] = useObservable(
    todosQuery.selectVisibilityFilter$,
    v.SHOW_ALL,
  );

  return [selectFilter, todoList, todosService];
}
