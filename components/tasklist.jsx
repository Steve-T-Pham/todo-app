import { useState } from 'react';

const Tasklist = ({ tasks, deleteTask }) =>{

    return(
        <div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default Tasklist;
