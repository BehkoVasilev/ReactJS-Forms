import { useState } from "react";
import "./App.css";

function App() {
  const [hobbies, setHobbies] = useState({});

  const [values, setFormValues] = useState({
    username: 'Pesho',
    email: '',
    creditCard: '',
    occupation: 'medicine',
    gender: 'male',
    bio: '',
    age: ''
  });

  const onChangeHandler = (e) => {
    setFormValues(state => ({...state, [e.target.name]: e.target.value}))
  };

  const onHobbiesChange = (e) => {
    setHobbies(state => ({ ...state, [e.target.value]: e.target.checked }))
  }

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(values);
    console.log(hobbies);
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
              value={values.username}
              onChange={onChangeHandler}
            // onBlur={onUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={values.email}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={values.age}
              onChange={onChangeHandler}
            />
          </div>

          {values.age >= 18 &&
            <div>
              <label htmlFor="credit-card">Credit Card</label>
              <input
                type="text"
                name="creditCard"
                id="credit-card"
                value={values.creditCard}
                onChange={onChangeHandler}
              />
            </div>
          }

          <div>
            <label htmlFor="occupation">Occupation</label>
            <select name="occupation" id="occupation" value={values.occupation} onChange={onChangeHandler}>
              <option value="it">IT</option>
              <option value="medicine">Medicine</option>
              <option value="engineering">Engineering</option>
            </select>
          </div>

          <div>
            <label htmlFor="male">Male</label>
            <input type="radio" name={values.gender} id="male" value='male' onChange={onChangeHandler} checked={values.gender === "male"} />
            <label htmlFor="femail">Female</label>
            <input type="radio" name="gender" id="female" value='female' onChange={onChangeHandler} checked={values.gender === "female"} />
          </div>

          <div>
            <label htmlFor="bio">Bio</label>
            <textarea name="bio" id="bio " cols="30" rows="10" value={values.values} onChange={onChangeHandler} ></textarea>
          </div>

          <div>
            <label htmlFor="hobbies">reading</label>
            <input type="checkbox" name="hobbies" value="reading" id="reading" onChange={onHobbiesChange} checked={hobbies["reading"] || false} />
            <label htmlFor="hobbbies">hiking</label>
            <input type="checkbox" name="hobbies" value="hiking" id="hiking" onChange={onHobbiesChange} checked={hobbies["hiking"] || false} />
            <label htmlFor="hobbbies">gaming</label>
            <input type="checkbox" name="hobbies" value="gaming" id="gaming" onChange={onHobbiesChange} checked={hobbies["gaming"] || false} />
            <label htmlFor="hobbbies">sports</label>
            <input type="checkbox" name="hobbies" value="sports" id="sports" onChange={onHobbiesChange} checked={hobbies["sports"] || false} />
            <label htmlFor="hobbbies">coding</label>
            <input type="checkbox" name="hobbies" value="coding" id="coding" onChange={onHobbiesChange} checked={hobbies["coding"] || false} />
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
