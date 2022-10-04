import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home: Hello world!</h1>
      <Link to='/'>Back to landing page</Link>
    </div>
  );
}

export default Home;