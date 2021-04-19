import './App.css';
import {default as Planet} from './planet_view.js';
import React, {useState, useEffect, useRef} from 'react';
const planet_data = require("./planets_info.json");


function usePrevious(value){
  const ref = useRef();
  useEffect(()=>{
      ref.current = value;
  }, [value]);

  return ref.current;
}

function App() {
  
  const [planet, setPlanet] = useState("");
  const prevPlanetRef = usePrevious(planet);
  console.log(prevPlanetRef);

  var key = 0;
  const nav_link = Object.keys(planet_data).map((item)=>{
    return <li key={key++} className="planets_link">
        <a className={item} onClick={()=>setPlanet(item)}>{item.toUpperCase()}</a>
      </li>
  });

  return (
    <div className="App">
      <ul className="nav">{nav_link}</ul>
      
      {planet !== "" &&
        <Planet name={planet} planets={planet_data} prevPlanet={prevPlanetRef} />
      }

    </div>
  );
}

export default App;
