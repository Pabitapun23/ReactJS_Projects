import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = 'Pabita';
const currDate = new Date().toLocaleDateString();  //hamro local date ko format ma auxa
const currTime = new Date().toLocaleTimeString();  //print in our local time format and current time dinxa
const img1 = "https://picsum.photos/200/300"
const img2 = "https://picsum.photos/250/300"
const img3 = "https://picsum.photos/300/300"
const links = "https://www.google.com/"

ReactDOM.render( 
  <>
    <h1 className="heading"> Pabita Pun Netflix Picks </h1>
    <p> List of 5 Best Series. </p>
    <ol className="card">
      <li>Squid Game</li>
      <li>Stranger Things</li>
      <li>All of us are dead</li>
      <li>Money Heist</li>
      <li>Business Proposal</li>
    </ol>

    <h1 contentEditable="true" className="heading">Hello, My Name is {name}</h1>
    <p>Current Date is = {currDate} </p>
    <p>Current Time is = {currTime} </p>

    {/* lorem ipsum images for random pics */}

    <div className="img_div">
    <img src={img1} alt="randomImages"/>  
    <img src={img2} alt="randomImages"/>  
    <a href={links} target="_next">
      <img src={img3} alt="randomImages"/>              
    </a>
    </div>
  </>
, document.getElementById("root"));