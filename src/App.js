import React,{ Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      {name: 'Asad',age:31,belt:'green',id:1},
      {name: 'Ahsan',age:31,belt:'red',id:2},
      {name: 'Gadda',age:31,belt:'black',id:3}
    ]
  } 
  render(){
    return (
      <div className="App">
        <h1>Pro App</h1>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
  
}

export default App;
