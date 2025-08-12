import React, { useState } from 'react';
function Radio_dropDown() {
  const [gender, setGender] = useState('male');
  const [city, setCity] = useState('islamabad');
    return (
        <div>
            <h1>Handle Radio and Drop Down </h1>
            <h3>select the Gender</h3>
            <label>
                <input type="radio" name="gender" value="male" onChange={(Event) => setGender(Event.target.value)} />
                Male
            </label>
            <label>
                <input type="radio" name="gender" value="female" onChange={(Event) => setGender(Event.target.value)} />
                Female
            </label>
            <label>
                <input type="radio" name="gender" value="other" onChange={(Event) => setGender(Event.target.value)} />
                Other
            </label>

            <h2>Select Gender is : {gender}</h2>
<hr />

            <h1>Handle Drop Down</h1> 

            <select onChange={(Event) => setCity(Event.target.value)} defaultValue={"Multan"}>
              <option value="islamabad">islamabad</option>
              <option value="karachi">karachi</option>
              <option value="lahore">lahore</option>
              <option value="peshawar">peshawar</option>
              <option value="quetta">quetta</option>
              <option value="multan">multan</option>
              <option value="hyderabad">hyderabad</option>
            </select>
<h3>Selected City is : {city}</h3>


        </div>
    );
}
export default Radio_dropDown;