import React, { useState } from 'react'
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';


const Taskmanager = () => {


    const [tasks,setTasks]  = useState( [])
    const [filter,setFilter]  = useState("all")

    const addTask = ( text ) => {
       
        const newTask = {
            id: Date.now(),
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

       const filteredTasks = tasks.filter(task => {
         if (filter === "active")  return !task.completed
         if (filter ===  "completed")  return task.completed 
         return all
       });
    
  return (
    <div>  
      <h1>Task Mananger</h1>
      <TaskInput  addTask={addTask} />
      <TaskFilter    filter={filter} setFilter={setFilter}/>

      <div className='task-list'>
         {filteredTasks.length === 0   ?  (
            <p> {filter === 'completed' 
              ? 'No completed task'
              :  filter === 'active'  
              ?  "No active tasks  - add some!"
              :"No tasks added yet.Start by adding a task above"
              } </p>
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
