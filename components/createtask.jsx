import { useState } from 'react';

const CreateTask = ({ addTask }) =>{
    const [newTask, setNewTask] = useState('');

    const createNewTask = () =>{
        if (newTask.trim() !== ''){
            addTask(newTask);
            setNewTask('');
        }
    }

    const handleChange = (e) =>{
        e.preventDefault();
        setNewTask(e.target.value);
        console.log(newTask);
    }

    return(
        <div>
            <input type='text' value={newTask} onChange={handleChange}></input>
            <button onClick={createNewTask}>+</button>
        </div>
    );
}

export default CreateTask;