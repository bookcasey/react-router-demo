import { Route, Switch, Link } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import UserProfile from './UserProfile';
import CreateProfile from './CreateProfile';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/profile/new'>New profile</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile/new">
          <CreateProfile />
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
  );
}

export default App;
