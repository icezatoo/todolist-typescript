import { todosStore, TodosStore } from './todo.store';
import { VISIBILITY_FILTER, createTodo } from './todo.model';
import { ID } from '@datorama/akita';

export class TodosService {
  constructor(private todosStore: TodosStore) {}

  public updateFilter(filter: VISIBILITY_FILTER) {
    this.todosStore.update({
      ui: {
        filter,
      },
    });
  }

  public complete(id: ID) {
    this.todosStore.update(id, entity => ({ completed: !entity.completed }));
  }

  public add(text: string) {
    const todo = createTodo(text);
    this.todosStore.add(todo);
  }

  public delete(id: ID) {
    this.todosStore.remove(id);
  }
}

export const todosService = new TodosService(todosStore);
