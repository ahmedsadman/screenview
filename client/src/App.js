import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import SignForm from './components/SignForm';

function App() {
  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/register" component={SignForm} />
    </Router>
  );
}

export default App;
