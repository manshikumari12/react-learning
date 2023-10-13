
import './App.css';
import Api from './Component/Api';
import Footer from './Component/Footer';
import SingleProduct from './Component/SingleProduct';

import Header from './Headers/top'; 

function App() {
  return (
    <div className="App">
      <Header /> 
      <Api />
      <SingleProduct/>

<Footer/>
    </div>
  );
}


export default App;
