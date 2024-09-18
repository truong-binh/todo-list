import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue('');
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder='Job content'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>Add</button>
      </div>
    );
  };

  export default TodoForm;