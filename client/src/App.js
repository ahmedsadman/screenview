import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={LandingPage} />
      <div className="App">
        <h1 className="text-red-500">Hello</h1>
      </div>
    </Router>
  );
}

export default App;
