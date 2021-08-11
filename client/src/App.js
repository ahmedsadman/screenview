import './App.css';
import { Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
// import SignForm from './components/SignForm';
import HomePage from './pages/HomePage';
import ProtectedRoute from './auth/protected-route';

function App() {
  return (
    <>
      <Route path="/" exact component={LandingPage} />
      {/* <Route path="/register" component={SignForm} /> */}
      <Switch>
        <ProtectedRoute path="/feed" component={HomePage} />
      </Switch>
      
    </>
    
  );
}

export default App;
