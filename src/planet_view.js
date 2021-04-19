import { useEffect } from "react";
import earth from "./assets/earth.jpg";
import {default as my_images} from "./pictures";

function Planet(props){
    const planet = props.planets[props.name];

    console.log(planet);
    document.getElementsByClassName(props.name)[0].classList.add("add_color");
    if(props.prevPlanet !== "") 
        document.getElementsByClassName(props.prevPlanet)[0].classList.remove("add_color");
    
    return( 
    <div className="planet_component"> 
        <div className="planet_div">
            <img key={0} alt="planet" src={my_images[props.name.toLowerCase()]}></img>
            <div className="quick_facts">
                <ul>
                    <li> TYPE: {planet.type} </li> 
                    <li> DISTANCE: {planet.distance} </li>
                    <li> Earth Days/ Year: {planet.year} </li>
                    <li> Earth Days/ Day: {planet.day} </li>
                    <li> Radius: {planet.radius} km </li>
                    <li> Orbit Velocity: {planet['orbit velocity']} </li>
                </ul>
            </div>
        </div>
        <div className="planet_description">
            <p>{planet.description}</p>
        </div>
        <div className="more_info">
            Learn More About {props.name.toUpperCase()}
            <a href={planet["nasa link"]}> here. </a>
        </div>
    </div>
    );

}


export default Planet;