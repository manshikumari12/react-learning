
import './App.css';
import React from 'react';

function App() {
  const [amount,setAmount]=React.useState(0)

  const handleDeposit= ()=>{

    setAmount((prevAmount)=> prevAmount+100) //0+100=100
    setAmount((prevAmount)=> prevAmount+100) //100+100=200
    // prevAmount is passed by react so it change the value 
    setAmount((prevAmount)=> prevAmount+100) //200+100=300
    setAmount((prevAmount)=> prevAmount+100)

    setAmount(amount+100)


    console.log(`amount is ${amount}`)
  }
  const handleWithdraw= ()=>{
    setAmount(amount+100)
  }
  return (
    <div className="App">

<h1>Current Amount : {amount}</h1>
<button onClick={handleDeposit}>Deposite 100</button>
<button onClick={handleWithdraw}>Withdraw 100</button>
     
    </div>
  );
}

export default App;

// Satesate is async in nature because of optimizations .



