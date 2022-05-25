import "./App.css";
import React, { useState } from "react";
import baby from './baby.jpg';

function App() {
  const [person, setPerson] = useState({
    fullName: "Amani Fallah",
    bio: "Ingénieur Réseau",
    imgSrc:'baby.jpg',
    profession: "FullStack JS Student ",
  });

  const [timer, setTimer] = useState(0);
  const [show, setshow] = useState(false); 
  
  

  

  return (
    <div className="App">
      

      <button  className="btn" onClick={()=>setshow(!show)}>shows</button>
     {show?
     <div className='card'>
      <img style={{width: "300px", height: "200px"}} alt="" src={baby}/>
      <span>{person.fullName}</span>
      <span>{person.bio}</span>
      <span>{person.profession}</span>
      </div>: null}
      <p>{timer}</p>
      <button className="butt"onClick={()=>setTimer(timer+1)}>count</button>



    </div>
  );
}

export default App;
