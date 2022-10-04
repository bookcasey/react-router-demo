import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <p>404: Not found!</p>
      <Link to='/'>Back to landing page</Link>
    </div>
  )
}

export default NotFound;