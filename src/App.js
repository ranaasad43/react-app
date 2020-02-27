import React,{ Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      {name: 'Asad',age:31,belt:'green',id:1},
      {name: 'Ahsan',age:31,belt:'red',id:2},
      {name: 'Gadda',age:5,belt:'black',id:3}
    ]
  }
  addNinja = (ninja) =>{
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas,ninja];
    console.log(this.state.ninjas);
    
    this.setState({
      ninjas: ninjas
    })
    console.log(this.state.ninjas);
  } 
  render(){
    return (
      <div className="App">
        <h1>Pro App</h1>
        <Ninjas ninjas={this.state.ninjas} />
        <br/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
  
}

export default App;
