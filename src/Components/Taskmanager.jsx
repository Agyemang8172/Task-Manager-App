import React, { useState } from 'react'
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';


const Taskmanager = () => {


    const [tasks,setTasks]  = useState( [])

    const addTask = ( text ) => {

        const newTask = {
            id: Date. now(),
            text: text,
            completed:false
        };
        setTasks([...tasks, newTask])
        } 

        const toggleComplete = (id)  => {
             setTasks(
                tasks.map((task) => 
                    task.id === id ? { ...task, completed:  !task.completed} : task
            )
             )
        }
       const deleteTask = (id)  => {
        setTasks(tasks.filter(task => task.id !== id ))
       }
    
  return (
    <div>
      <h1>Task Mananger</h1>
      <TaskInput  addTask={addTask} />

      <div className='task-list'>
         { tasks.length === 0   ?  (
            <p> No tasks yet. Add some tasks!</p>
         ): (
            tasks.map(task =>(
                <TaskItem 
                  key = {task.id}
                  task={task}
                  toggleComplete={toggleComplete}
                  deleteTask={deleteTask}

                />
            ) )
         )}
       </div>
    </div>
  )
}

export default Taskmanager
