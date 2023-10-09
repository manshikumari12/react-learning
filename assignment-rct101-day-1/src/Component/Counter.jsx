import React, { useState } from 'react'


const Counter = () => {
    const [count, setCounte ] = useState(0)
    const incre = () => setCounte (count+1)
    const decre = () => setCounte (count-1)
  return (
    <div>
        <button disabled={count >=10} onClick={incre}>+</button>
        <button  onClick={decre}>-</button>
      
        <p>Count: {count}</p>
    </div>



  )


}


export default Counter

