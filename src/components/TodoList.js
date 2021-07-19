import React, { useState } from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';
import TodoForm from './TodoForm';
import TodoForm2 from './TodoForm2';
import TodoForm3 from './TodoForm3';
import Todo from './Todo';
import Todo2 from './Todo2';
import Todo3 from './Todo3';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todos2, setTodos2] = useState([]);
  const [todos3, setTodos3] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const addTodo2 = todo2 => {
    if (!todo2.text || /^\s*$/.test(todo2.text)) {
      return;
    }

    const newTodos2 = [todo2, ...todos2];

    setTodos2(newTodos2);
  };

  const addTodo3 = todo3 => {
    if (!todo3.text || /^\s*$/.test(todo3.text)) {
      return;
    }

    const newTodos3 = [todo3, ...todos3];

    setTodos3(newTodos3);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const updateTodo2 = (todo2Id, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos2(prev => prev.map(item => (item.id === todo2Id ? newValue : item)));
  };

  const updateTodo3 = (todo3Id, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos3(prev => prev.map(item => (item.id === todo3Id ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const removeTodo2 = id => {
    const removedArr = [...todos2].filter(todo2 => todo2.id !== id);

    setTodos2(removedArr);
  };

  const removeTodo3 = id => {
    const removedArr = [...todos3].filter(todo3 => todo3.id !== id);

    setTodos3(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const completeTodo2 = id => {
    let updatedTodos2 = todos2.map(todo2 => {
      if (todo2.id === id) {
        todo2.isComplete = !todo2.isComplete;
      }
      return todo2;
    });
    setTodos2(updatedTodos2);
  };

  const completeTodo3 = id => {
    let updatedTodos3 = todos3.map(todo3 => {
      if (todo3.id === id) {
        todo3.isComplete = !todo3.isComplete;
      }
      return todo3;
    });
    setTodos3(updatedTodos3);
  };

  return (
    <>

    <Row className="cardd">
      <Col>
        <Card body>
          <CardTitle tag="h5">Todo List</CardTitle>
          <TodoForm onSubmit={addTodo} />
            <Todo
              todos={todos}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
            />
        </Card>
      </Col>

      <Col>
        <Card body>
          <CardTitle tag="h5">In Progress</CardTitle>
          <TodoForm2 onSubmit={addTodo2} />
            <Todo2
              todos2={todos2}
              completeTodo2={completeTodo2}
              removeTodo2={removeTodo2}
              updateTodo2={updateTodo2}
            />
        </Card>
      </Col>

      <Col>
        <Card body>
          <CardTitle tag="h5">Done</CardTitle>
          <TodoForm3 onSubmit={addTodo3} />
            <Todo3
              todos3={todos3}
              completeTodo3={completeTodo3}
              removeTodo3={removeTodo3}
              updateTodo3={updateTodo3}
            />
        </Card>
      </Col>
    </Row>

    </>
  );
}

export default TodoList;