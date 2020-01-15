import React from 'react';
import Form from './components/form';
import CheckBoxList from './components/list';
import Page from './components/page';
import { useTodoHook } from './hooks/useTodosHook';
import { ID } from '@datorama/akita';

function App() {
  const [filter, todoList, todoService] = useTodoHook();

  const removeList = (id: ID) => {
    todoService.delete(id);
  };
  const changeStatusCheckBox = (id: ID) => {
    todoService.complete(id);
  };

  const addItemList = (text: string) => {
    todoService.add(text);
  };

  const updateFilter = (value: any) => {
    todoService.updateFilter(value);
  };

  return (
    <Page>
      <>
        <Form
          selectFilter={filter}
          onAdd={addItemList}
          onChange={updateFilter}
        />
        <CheckBoxList
          todoList={todoList}
          onChangeCheckbox={changeStatusCheckBox}
          clickRemove={removeList}
        />
      </>
    </Page>
  );
}

export default App;
