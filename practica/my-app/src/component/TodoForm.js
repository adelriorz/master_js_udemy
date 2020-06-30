import React from 'react';

const TodoForm = ({addTodo}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(event.target.value);
    }
    return (<form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          onChange={handleSubmit}
        />
      </form>)
};

export default TodoForm;