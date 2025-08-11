import User from  './assets/User'
import Advance from './advance';
import Wrapper from './wrapper';
function App() {    {/*this user tag will give data to user.jsx props*/}
return( 
    <div>
<User name="Babar" age={22} stdName = "Tariq" stdId = "RCF-30121" ProName="Smart Watch" ProId="watch-4533"   ProDes="At the heart of our smartwatches lies a commitment to your well-being. With advanced health monitoring features including heart rate tracking, stress management and sleep monitoring, our smartwatches empower you to take control of your fitness journey like never before. Whether you're a fitness enthusiast striving to reach new milestones or someone prioritizing holistic wellness, our smartwatches provide actionable insights and personalized guidance to support your health and wellness goals."/>
<Advance name2="Hadi Ahmed"/>
<Advance />   {/*for defualt props */}
<Wrapper>
    <h4>khan here</h4>
</Wrapper>
<Wrapper>
    <h4>hassan here</h4>
</Wrapper>
<Wrapper>
    <h4>mohsin here</h4>
</Wrapper>
<Wrapper>
    <h4>whats upp</h4>
</Wrapper>
</div>
 

);

}

export default App

