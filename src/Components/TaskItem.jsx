const Taskitem = ( {task, toggleComplete, deleteTask} )  => {


    return (
        <div  className= {`${task.completed ? "bg-gray-100" : ""}`}>
            <span
             onClick={ () => toggleComplete(task.id)}
             className = {  `${ task.completed ? "line-through text-gray-500" : ""}`}
            >
          {task.text}
            </span>
 
            <button
              onClick = { ()=> deleteTask(task.id)}
            >
                  Delete
            </button>

        </div>
    )

}

export default Taskitem