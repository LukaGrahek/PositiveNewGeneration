import React, { useState, useEffect } from 'react'
import load from './load.gif';
import logo from './water.gif';
import './App.css';



function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])


  return (
    <>
    {loading === false ? (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome To <p className="name1" >New Positive Generation</p>   Where Water Won't Be An Issue.
        </p>
        <a
          className="App-link"
          href="https://www.wateraid.org/ca/donate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate To A Charitable Cause!
        </a>
      </header>
    </div>
    ) : (
      <div className='Load'>
        <img src={load} className="load1" alt="loading" />
        <p className="name2" >Ready To Do Your Part?</p>
      </div>
      
    )}
    </>
  );
}

export default App;
