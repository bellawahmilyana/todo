import React, { useState } from 'react';
import TodoForm3 from './TodoForm3';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo3 = ({ todos3, completeTodo3, removeTodo3, updateTodo3 }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo3(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm3 edit={edit} onSubmit={submitUpdate} />;
  }

  return todos3.map((todo3, index) => (

    <>

    <div
      className={todo3.isComplete ? 'todo3-row complete' : 'todo3-row'}
      key={index}
    >
      <div key={todo3.id} onClick={() => completeTodo3(todo3.id)}>
        {todo3.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo3(todo3.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo3.id, value: todo3.text })}
          className='edit-icon'
        />
      </div>
    </div>
    
    </>

  ));
};

export default Todo3;