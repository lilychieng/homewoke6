import './App.css';
import React from 'react';
import {useState} from 'react'

function App() {

  const [data, setData] = useState();
  const [error, setError] = useState("ERROR: User Not Found");

  return (
    // Headers and Text
    <div className="App">
      <h1>Homework 6: Lily Chieng (LCC2483)</h1>
      <header className="App-header">

        <div class="flex-grid">
          <div class="flex-col">
            Your Input Request to Server
          </div>

          <div class="flex-col">
            Your Output Request to Server
          </div>
        </div>

        <div class="flex-grid">

          {/* Input Field */}
          <div class="flex-col">
            <input id = "pw-box-pads" type="text" value={data} onChange={
              (e) => {
                setData(e.target.value);
                // fetch("http://127.0.0.1:5000/name/" + e.target.value)
                // fetch("http://localhost:5000/name/" + e.target.value)
                  fetch("/name/" + e.target.value)
                  .then(response => response.json())
                  .then(data => {setError(data.last_name)})
                  .catch(error => {setError(error)})
                }
              }
                />
          </div>

          {/* Output Field */}
          <div class="flex-col">
            <textarea id = "u-box-pads" type="text" value={error} />
          </div>

        </div>

      </header>
    </div>
  );
}

export default App;