import React from 'react';

const TodoList = ({ todos, toggleTodo }) => (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} onClick={() => toggleTodo(index)}>
          {todo.text}
        </li>
      ))}
    </ul>
  );

export default TodoList;