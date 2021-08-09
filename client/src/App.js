import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import SignForm from './components/SignForm';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/register" component={SignForm} />
      <Route path="/feed" component={HomePage} />
    
    </Router>
  );
}

export default App;
