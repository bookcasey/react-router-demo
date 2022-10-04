import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function UserProfile() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const history = useHistory();

  console.log(id);

  useEffect(() => {
    async function getUser() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      console.log(data);
      if (!data.name) {
        history.push('/not-found');
      }
      setUser(data);
    }
    getUser()
  }, [id, history]);

  return (
    <div>
      <h2>User Profile: {user.name}</h2>
      <p>{user.company?.catchPhrase}</p>
      <p>{user.company ? user.company.catchPhrase : null}</p>
      <p>{user.company && user.company.catchPhrase}</p>
    </div>
  )
}

export default UserProfile;