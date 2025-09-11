import React from 'react'

const TaskFilter = ({setFilter,filter}) => {

  return (
    <div> 
        <button
          onClick={() => setFilter("all")}
          className= {` ${filter === 'active'} ? 'bg-gray-800 text-white'  : 'bg-gray-300'`}
        >
        </button>
        <button>
            Active
        </button>

        <button
         onClick={()  => setFilter("active")}
          className={` ${filter === "active"} ? "bg-gray-800 text-white" : "bg-gray-300`}
          ></button>
      
    </div>
  )
}

export default TaskFilter
