import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState('Pesho');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setUsername('Gosho')
    }, 3000)
  }, []);

  const onEmailSubim = (e) => {
    console.log(e.target.value);
  }

  const onUsernameChange = (e) => {
    console.log(e.target.value);
  };

  const onEmailChange = (e) => {
    console.log(e.target.value);
  }

  
  // const onSubmitClick = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.parentElement.previousSibling.previousSibling.children[1].value);
  //   console.log(e.target.parentElement.previousSibling.children[1].value);
  // }

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log(data.username);
    console.log(data.email);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="username" >Username</label>
            <input
              type="text"
              name="username"
              id="username"
              defaultValue={username}
              onChange={onUsernameChange}
            // onBlur={onUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              defaultValue={email}
              onChange={onEmailChange}
            />
          </div>
          <div>
            <input type="submit" value="send" />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
