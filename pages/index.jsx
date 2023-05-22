import { useState } from 'react';
import CreateTask from '../components/createtask';
import Tasklist from '../components/tasklist';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) =>{
      setTasks([...tasks, newTask]);
  };

  const deleteTask = (tasks) =>{
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  return (
    <div>
      <CreateTask addTask={addTask}/>
      <Tasklist tasks={tasks} addTask={addTask} />
    </div>
  );
}

export default Home;