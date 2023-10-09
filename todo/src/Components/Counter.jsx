import React, { useState } from 'react'


const Counter = () => {
    const [count, setCounte ] = useState(0)
    const incre = () => setCounte (+1)
    const decre = () => setCounte (-1)
  return (
    <div>
        <button  onClick={incre}>Inc</button>
       {count}
        <button onClick={decre}>Dec</button>
  
       
    </div>



  )


}


export default Counter
