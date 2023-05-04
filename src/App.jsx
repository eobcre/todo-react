import { useState } from 'react';
import { todoSample } from './todoSample';

const App = () => {
  const [todos, setTodos] = useState(todoSample);
  const [inputTodo, setInputTodo] = useState('');

  // input settings logic
  const handleChangeAdd = (e) => {
    setInputTodo(e.target.value);
  };

  return (
    <div>
      <h2>List</h2>
      <input type='text' value={inputTodo} onChange={handleChangeAdd} />
      <button>Add</button>
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
