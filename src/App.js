import './App.css';
import NavBar from './Components/NavBar/NavBar.js'
import Banner from './Components/Banner/Banner.js'
import StoreBrowser from './Components/StoreBrowser/StoreBrowsers';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <StoreBrowser />
    </div>
  );
}

export default App;
