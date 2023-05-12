import './App.css';
import { useState } from 'react';

function App() {
  const [todolist, setTodolist] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleNewChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      name: newTask,
      completed: false,
    };

    setTodolist([...todolist, task]);
    setNewTask('');
  };

  const deleteTask = (id) => {
    setTodolist(todolist.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodolist(
      todolist.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            TodoList project
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="addTask">
          <input
            onChange={handleNewChange}
            onFocus={() => setNewTask('')}
            value={newTask}
            placeholder="Add task..."
          />
          <button onClick={addTask}>Add task</button>
        </div>
        <div className="list">
          {todolist.map((task) => {
            return (
              <div className="task" key={task.id}>
                <div
                  className={`taskName ${task.completed ? 'completed' : ''}`}
                  onClick={() => completeTask(task.id)}
                >
                  {task.name}
                </div>
                <div className="actions">
                  <button onClick={() => deleteTask(task.id)}>X</button>
                  {!task.completed && (
                    <button onClick={() => completeTask(task.id)}>✓</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
