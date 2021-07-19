import React, { useState } from 'react';
import TodoForm2 from './TodoForm2';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo2 = ({ todos2, completeTodo2, removeTodo2, updateTodo2 }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo2(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm2 edit={edit} onSubmit={submitUpdate} />;
  }

  return todos2.map((todo2, index) => (

    <>

    <div
      className={todo2.isComplete ? 'todo2-row complete' : 'todo2-row'}
      key={index}
    >
      <div key={todo2.id} onClick={() => completeTodo2(todo2.id)}>
        {todo2.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo2(todo2.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo2.id, value: todo2.text })}
          className='edit-icon'
        />
      </div>
    </div>
    
    </>

  ));
};

export default Todo2;