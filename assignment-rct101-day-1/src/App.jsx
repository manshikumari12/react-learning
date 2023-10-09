// Import necessary dependencies and components
import './App.css';
import Api from './Component/Api';
import Header from './Headers/top'; // Updated import with proper naming convention


function App() {
  return (
    <div className="App">
      <Header /> {/* Include the Header component */}
      <Api />
    </div>
  );
}

// Export the App component
export default App;
