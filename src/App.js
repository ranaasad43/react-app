import React from 'react';
import Ninjas from './Ninjas';

function App() {
  return (
    <div className="App">
      <h1>Pro App</h1>
      <Ninjas name="Asad" age="31" belt="green"/>
      <br/>
      <Ninjas name="Ahsan" age="31" belt="red"/>
    </div>
  );
}

export default App;
