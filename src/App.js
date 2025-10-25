import React from 'react';
import logo from './assets/logo.svg';
import michaeljoshpf from './assets/michaeljoshpf.jpg';
import linkedinIcon from './assets/nav-icon.svg';

import './App.css';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './routes';


function TestButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1)
    alert("Clicked - going to home page")
  }
  return (
    <button onClick={handleClick}>
      Home Page
    </button>
  );
}

const ProfileInfo = { name: 'Michael', skills: "Full Stack, Data Science", degrees: "Computer science, Cognitive Science" }

function App() {
  return (
    <div className="App">
      <div>
        <RouterProvider router={router}/>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={michaeljoshpf} className="Profile-photo" alt="profile" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="social-icon"> 
          <a hrf="#"><img src={linkedinIcon} alt="" /></a>
        </div>
        <TestButton/>
      </header> */}
    </div>
  );
}

export default App;
