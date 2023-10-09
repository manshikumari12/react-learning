const getData = () =>{
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
       .then((res)=>
       res.json()
       )
  }
export default  getData