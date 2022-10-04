import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreateProfile() {
  const [name, setName] = useState("");
  const history = useHistory();


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      // Do stuff here
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
          method: 'POST',
          body: JSON.stringify({ name })
        })

      console.log(response);
      // Call another function here
      history.push('/home');
    } catch (error) { }
  }
  return (
    <div>
      <h1>Create a new profile</h1>
      <form onSubmit={handleSubmit}>
        <input name='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreateProfile;