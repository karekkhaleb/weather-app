import React from 'react';
import './App.css';
import SideDescription from './Components/SideDescription'
import CitiesList from "./Components/CitiesList";

function App() {
  return (
    <div className="App">
      <div className="container">
          <SideDescription />
          <CitiesList/>
      </div>
    </div>
  );
}

export default App;
