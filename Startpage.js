import React from "react";
import './startpage.css';
import StartForm from "./Startform";



function Start() {
  return (
    <>
  <div className="startwords">
    <p><h1>Welcome to Fit Find!</h1></p>

    <p>The place to go for all 
      your routines and movements in the gym
    </p> 

    <p>Please log in below or click the 
       exercise tab to search for a movement
    </p> 
  </div>
    <StartForm />
  
    </>
  );
}

export default Start;
