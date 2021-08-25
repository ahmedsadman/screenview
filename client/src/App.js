import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// import SignForm from './components/SignForm';
import HomePage from "./pages/HomePage";
import PostLogin from "./pages/PostLogin";
import Profile from "./pages/Profile";
import ProtectedRoute from "./auth/protected-route";
import ConnectionPage from "./pages/ConnectionPage";
import test from "./pages/test";
import MoviePage from "./pages/MoviePage";
import WatchListPage from "./pages/WatchListPage";

function App() {
  return (
    <>
      <Route path="/" exact component={LandingPage} />
      {/* <Route path="/register" component={SignForm} /> */}
      <Switch>
        <ProtectedRoute exact path="/feed" component={HomePage} />
        <ProtectedRoute exact path="/postlogin" component={PostLogin} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/connections" component={ConnectionPage} />
        <ProtectedRoute exact path="/movie/:id" component={MoviePage} />
        <ProtectedRoute exact path="/watchlist" component={WatchListPage} />
      </Switch>
      <Route path="/test" exact component={test} />
    </>
  );
}

export default App;
