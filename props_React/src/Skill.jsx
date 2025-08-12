import React, { useState } from "react";

function Skill() {
  const [Skill, setSkill] = useState([]);

  const handleCheckboxChange = (event) => {
    
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkill([...Skill, event.target.value]); // Add  ... is a spread operator used to add new value into the array
    } else {
      setSkill(Skill.filter((s) => s !== event.target.value)); // Remove
    }
  };

  return (
    <div>
      <h1>My Skills</h1>

      <input type="checkbox" id="js" value="JavaScript" onChange={handleCheckboxChange} />
      <label htmlFor="js">JavaScript</label>
      <br />

      <input type="checkbox" id="react" value="React" onChange={handleCheckboxChange} />
      <label htmlFor="react">React</label>
      <br />

      <input type="checkbox" id="node" value="Node.js" onChange={handleCheckboxChange} />
      <label htmlFor="node">Node.js</label>
      <br />

      <input type="checkbox" id="css" value="CSS" onChange={handleCheckboxChange} />
      <label htmlFor="css">CSS</label>

      {/* 🆕 Display Selected Skills */}
      <h2>Selected Skills:</h2>
      <p>{Skill.length > 0 ? Skill.join(", ") : "No skills selected"}</p>
<hr />




    </div>
  );
}

export default Skill;
