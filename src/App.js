import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import UserProfile from './UserProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to='/home'>Home</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile/:id">
            <UserProfile />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>

        <footer>
          <hr />
          <p>Footer on every page</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
