import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Home from "./components/Home/Home";



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/home2"> Home 2</Link>
            </li>
          </ul>
          <hr />

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/home2">
              <Home></Home>
            </Route>
            <Route path="/friend/:id">
              <FriendDetail />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
