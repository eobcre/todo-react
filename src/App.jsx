import { useState } from 'react';
import { todoSample } from './todoSample';
import { nanoid } from 'nanoid';

const App = () => {
  const [todos, setTodos] = useState(todoSample);
  const [inputTodo, setInputTodo] = useState('');

  // input settings logic
  const handleChangeInput = (e) => {
    setInputTodo(e.target.value);
  };

  // add button logic
  const handleClickAdd = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      content: inputTodo,
    };
    // spread array (...todos), add new todo (newTodo)
    setTodos([...todos, newTodo]);
    // clear input
    setInputTodo('');
  };

  // done button logic
  const handleClickDone = (id) => {
    const newTodos = todos.filter((todoItem) => {
      return todoItem.id !== id;
    });
    setTodos(newTodos);
  };

  return (
    <div className='container'>
      <div className='form-container'>
        <h2>List</h2>
        <form onSubmit={handleClickAdd}>
          <input type='text' value={inputTodo} onChange={handleChangeInput} />
          <button>Add</button>
        </form>
      </div>
      {todos.map(({ id, content }) => {
        return (
          <div key={id} className='todo-container'>
            <span>{content}</span>
            <button onClick={() => handleClickDone(id)}>Done</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
