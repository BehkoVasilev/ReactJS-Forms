import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState('Pesho');
  const [email, setEmail] = useState('dang@abv.bg');
  const [age, setAge] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [occupation, setOcupation] = useState('medicine');
  const [gender, setGender] = useState('male');
  const [bio, setBio] = useState('');
  const [hobbies, setHobbies] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setUsername('Gosho')
    }, 3000)
  }, []);



  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onAgeChange = (e) => {
    if (e.target.value === '') {
      setAge('');
    } else {
      setAge(Number(e.target.value));
    }
  };

  const onCreditCardChange = (e) => {
    setCreditCard(e.target.value);
  };

  const onOccupationChange = (e) => {
    setOcupation(e.target.value)
  };

  const onGenderChange = (e) => {
    setGender(e.target.value);
  };

  const onBioChange = (e) => {
    setBio(e.target.value);
  };

  const onHobbiesChange = (e) => {
  
    setHobbies(state => ({ ...state, [e.target.value]: e.target.checked }))
  }

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(username);
    console.log(email);
    console.log(age);
    console.log(creditCard);
    console.log(occupation);
    console.log(bio);
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
              value={username}
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
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={onAgeChange}
            />
          </div>

          {age >= 18 &&
            <div>
              <label htmlFor="credit-card">Credit Card</label>
              <input
                type="text"
                name="credit-card"
                id="credit-card"
                value={creditCard}
                onChange={onCreditCardChange}
              />
            </div>
          }

          <div>
            <label htmlFor="occupation">Occupation</label>
            <select name="occupation" id="occupation" value={occupation} onChange={onOccupationChange}>
              <option value="it">IT</option>
              <option value="medicine">Medicine</option>
              <option value="engineering">Engineering</option>
            </select>
          </div>

          <div>
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="male" value='male' onChange={onGenderChange} checked={gender === "male"} />
            <label htmlFor="femail">Female</label>
            <input type="radio" name="gender" id="female" value='female' onChange={onGenderChange} checked={gender === "female"} />
          </div>

          <div>
            <label htmlFor="bio">Bio</label>
            <textarea name="bio" id="bio " cols="30" rows="10" value={bio} onChange={onBioChange} ></textarea>
          </div>

          <div>
            <label htmlFor="hobbies">reading</label>
            <input type="checkbox" name="hobbies" value="reading" id="reading" onChange={onHobbiesChange} checked={hobbies["reading"] || false} />
            <label htmlFor="hobbbies">hiking</label>
            <input type="checkbox" name="hobbies" value="hiking" id="hiking" onChange={onHobbiesChange} checked={hobbies["hiking"] || false}/>
            <label htmlFor="hobbbies">gaming</label>
            <input type="checkbox" name="hobbies" value="gaming" id="gaming" onChange={onHobbiesChange} checked={hobbies["gaming"] || false}/>
            <label htmlFor="hobbbies">sports</label>
            <input type="checkbox" name="hobbies" value="sports" id="sports" onChange={onHobbiesChange} checked={hobbies["sports"] || false}/>
            <label htmlFor="hobbbies">coding</label>
            <input type="checkbox" name="hobbies" value="coding" id="coding" onChange={onHobbiesChange} checked={hobbies["coding"] || false}/>
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
