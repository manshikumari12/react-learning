import React, {useState} from 'react'




const Signup = () => {
const [mail,SetEmail] = useState({})

const handleChange = (e) =>{
    const {name,value} = e.target
SetEmail({...mail,[name]:value})

}

console.log(mail)
//     const handleSubmit = () =>{
//    try {
//     const data =
//    } catch (error) {
    
//    }
    

   
//     }

  return (
    <div>
        {/* <input type="text" placeholder='name' name='name' onChange={handleChange}/> */}
        <input type="text" placeholder='email' name='email' onChange={handleChange} />
        <input type="text" placeholder='password' name='password' onChange={handleChange} />
        {/* <button onClick={handleSubmit}>Signup</button> */}
      
    </div>
  )
}

export default Signup
