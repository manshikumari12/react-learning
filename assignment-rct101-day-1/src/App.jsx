// Import necessary dependencies and components
import './App.css';
import Api from './Component/Api';
import Footer from './Component/Footer';

import Header from './Headers/top'; 

function App() {
  return (
    <div className="App">
      <Header /> {/* Include the Header component */}
      <Api />

<Footer/>
    </div>
  );
}

// Export the App component
export default App;
