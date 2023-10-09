
import './App.css';
import React from 'react';
import PostItem from './Component/PostItem';
import getData from './utilite/getdata';


function App() {
  const [data,setData ]=React.useState([]);

  

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
      <button onClick={fetchAndUpdateData}>GET POST</button >
      <div style={{display:'grid',gridTemplateColumns:"repeat(3,1fr)" ,gap:"10px", margin:"20px"}}>
        {
          data.map((post)=>(
          <PostItem key={post.id}{...post}/>
            // <li >{post.userId}</li>
          ))
        }
      </div>
      
    </div>
  );
}

export default App;
