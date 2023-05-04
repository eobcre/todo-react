import { useState } from 'react';
import { todoSample } from './todoSample';

const App = () => {
  const [todos, setTodos] = useState(todoSample);
  return (
    <div>
      <h2>List</h2>
      <input type='text' />
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
