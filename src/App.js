import './App.css';
import { useState } from 'react';

function App() {
  const [Todolist, setTodolist] = useState([]);
  const [newTask, setNewTask] = useState('');
  
  const handleNewChange = (event) => {
    setNewTask(event.target.value);
  };
  
  const addTasks = () => {
    const task = {
      id: Todolist.length === 0 ? 1 : Todolist[Todolist.length -1].id +1,
      task: newTask,
    };
  
    setTodolist([...Todolist, task]);
    setNewTask('');
  };
  
  const deleteTask = (id) => {
    setTodolist(Todolist.filter((task) => task.id !== id));
  };
  
  return (
    <div className='App'>
      <nav>
        <div className='nav-wrapper'>
          <a href='/' className='brand-logo'>
            TodoList project
          </a>
        </div>
      </nav>
      <div className='container'>
        <div className='addTask'>
          <input
            onChange={handleNewChange}
            onFocus={() => setNewTask('')}
            value={newTask}
            placeholder='Add task...'
          />
          <button onClick={addTasks}>Add task</button>
        </div>
        <div className='list'>
          {Todolist.map((task) => {
            return (
              <div className='DeleteTask' key={task.id}>
                <h1>{task.task}</h1>
                <button onClick={() => deleteTask(task.id)}>X</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
