

const gettingData = () => {
  return fetch(`https://fakestoreapi.com/products`)
  .then((res)=>
  res.json()
  )
}

export default gettingData

