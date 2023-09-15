import React from 'react'



const TodoItem = (props) => {
    const { id ,title ,status} =props
  return (

           <div key={id}>
            
          <p>
            {title} {"..."} {status ? "Completed" : "Not Completed"}

          </p>
          </div>
      
  
  )
}

export default TodoItem
