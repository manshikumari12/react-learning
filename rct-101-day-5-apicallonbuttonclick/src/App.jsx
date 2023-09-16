
import './App.css';
import React from 'react';

function App() {
  const [data,setData ]=React.useState([]);

  const getData = () =>{
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
       .then((res)=>
       res.json()
       )
  }

  const fetchAndUpdateData = async() =>{
    // console.log('get data');
    try {
      const resp = await getData()
      console.log(resp);

      setData(resp)
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="App">
      <h1>Posts</h1>
      <button onClick={fetchAndUpdateData}>GET POST</button>
      <ul>
        {
          data.map((post)=>(
            <li key={post.id}>{post.title} </li>
            // <li >{post.userId}</li>
          ))
        }
      </ul>
      
    </div>
  );
}

export default App;
