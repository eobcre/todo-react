import { useState } from 'react';
import { todoSample } from './todoSample';
import { nanoid } from 'nanoid';

const App = () => {
  const [todos, setTodos] = useState(todoSample);
  const [inputTodo, setInputTodo] = useState('');

  // input settings logic
  const handleInputChange = (e) => {
    setInputTodo(e.target.value);
  };

  // add button logic
  const handleClickAdd = () => {
    const newTodo = {
      id: nanoid(),
      content: inputTodo,
    };
    // spread array (...todos), add new todo (newTodo)
    setTodos([...todos, newTodo]);
    // clear input
    setInputTodo('');
  };

  return (
    <div>
      <h2>List</h2>
      <input type='text' value={inputTodo} onChange={handleInputChange} />
      <button onClick={handleClickAdd}>Add</button>
      {todos.map(({ id, content }) => {
        return (
          <div key={id}>
            <span>{content}</span>
            <button>Done</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
