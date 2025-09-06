import React, { useState } from 'react'

const Taskmanager = () => {


    const [tasks,setTasks]  = useState()

    const addTask = ( text ) => {

        const newTask = {
            id: Date.now(),
            text: text,
            completed:false
        };
        setTasks([...tasks, newTask        ])
    } 
  return (
    <div>
      <h1>Task Mananger</h1>
        <taskInput />
    </div>
  )
}

export default Taskmanager
