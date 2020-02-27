import React from 'react';


const Ninjas = ({ninjas,delNinja}) =>{
    const ninjalist = ninjas.map(ninja =>{
      if(ninja.age < 100){
        return (
          <div className="ninja" key={ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
            <button onClick={()=>{delNinja(ninja.id)}}>Delete</button>
            <br/>
          </div>
        )
      }else{
        return null;
      }      
    })
    return(
      <div className="ninja-list">
        {ninjalist}
      </div>
      
    )
}

export default Ninjas;