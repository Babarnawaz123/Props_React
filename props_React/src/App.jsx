import User from  './assets/User'
import Advance from './advance';
import Wrapper from './wrapper';
import { useState } from 'react';
import Skill from './Skill';
import Radio_dropDown from './radio_dropDown';
import Table_map from './table_map';
import Sample_table from './Sample_table';
function App() {    {/*this user tag will give data to user.jsx props*/}
const [val,setVal] = useState("")
const [Name,setName] = useState("")
const [Password,setPassword] = useState("")
const [Email,setEmail] = useState("")
return( 
    <div>
<User name="Babar" age={22} stdName = "Tariq" stdId = "RCF-30121" ProName="Smart Watch" ProId="watch-4533"   ProDes="At the heart of our smartwatches lies a commitment to your well-being. With advanced health monitoring features including heart rate tracking, stress management and sleep monitoring, our smartwatches empower you to take control of your fitness journey like never before. Whether you're a fitness enthusiast striving to reach new milestones or someone prioritizing holistic wellness, our smartwatches provide actionable insights and personalized guidance to support your health and wellness goals."/>
<Advance name2="Hadi Ahmed"/>
<Advance />   {/*for defualt props */}
<Wrapper>
    <h4 style={{color:"red"}}>khan here</h4>
</Wrapper>
<Wrapper>
    <h4 style={{color:"blue"}}>hassan here</h4>
</Wrapper>
<Wrapper>
    <h4 style={{color:"green"}}>mohsin here</h4>
</Wrapper>
<Wrapper>
    <h4 style={{color:"purple"}}>whats upp</h4>
</Wrapper>
<hr />
{/*onChange Event  */}
<h1>Get input field value</h1>
<input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder='Enter text here'/>
<h1>{val}</h1>
<button onClick={()=>setVal("")} >Clear Value</button>
<hr />

{/*Controlled Component */}
<form action="">
    <h1>Controller Component</h1>
    <input type="text" placeholder='Enter the name' onChange={(event)=>setName(event.target.value)} value={Name}/>
    <br/>
    <input type="Password" placeholder='Enter the Password' onChange={(event)=>setPassword(event.target.value)} value={Password}/>
    <br />
    <input type="Email" placeholder='Enter the Email' onChange={(event)=>setEmail(event.target.value)} value={Email}/>
    <br />
    <button>submit</button>
    <button onClick={()=>{setName("");setPassword("");setEmail("");}}>clear</button>
</form>
<h3>{Name}</h3>
<h3>{Password}</h3>
<h3>{Email}</h3>

<hr />
<Skill/>
{/*Handle Checkboxes, Get value from checkboxes */}

<Radio_dropDown/>
<hr />
<Table_map/>
<br /><br />
<hr />
<Sample_table/>
</div>
 

);

}

export default App

