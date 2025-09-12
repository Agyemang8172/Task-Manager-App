import React from 'react'

const TaskFilter = ({setFilter,filter}) => {

  return (
    <div> 
        <button
          onClick={() => setFilter("all")}
          className= {` ${filter === 'active' ? 'bg-gray-800 text-white'  : 'bg-gray-300'}`}
        >
          All
        </button>
        <button
        onClick = {() => setFilter("completed")}
        className={ `${filter ===  'completed'  ? 'bg-gray-800 text-white'  : "bg-gray-300"}`}
        >
          Completed
        </button>

        <button
         onClick={()  => setFilter("active")}
          className={` ${filter === "active" ? "bg-gray-800 text-white" : "bg-gray-300"}`}
          >
            Active
          </button>
      
    </div>
  )
}

export default TaskFilter
