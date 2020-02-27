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
  delNinja = (id) =>{
    let ninjas = this.state.ninjas.filter(ninja =>{
      return ninja.id !== id
    });
    this.setState({
      ninjas : ninjas
    })
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
  componentDidMount(){
    console.log('component mounted');
  }
  componentDidUpdate(pprops,pstate){
    console.log('component updated');
    console.log(pprops);
    console.log(pstate);
  } 
  render(){
    return (
      <div className="App">
        <h1>Pro App</h1>
        <Ninjas ninjas={this.state.ninjas} delNinja={this.delNinja}/>
        <br/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
  
}

export default App;
