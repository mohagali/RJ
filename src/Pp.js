import React, { Component,useState, useEffect  } from 'react'

const Newomp =(props)=>{
  const [users,setUsers]=useState([])

  const usersData=[
    {name:'moh',age:22},
    {name:'moh',age:22},
    {name:'moh',age:22}
  ]

  useEffect(()=>{
    setUsers(usersData)
  },[])

  return(<div>
      {users.map(user=>{
        return <ul>{user.name}</ul>
      })}
      </div>
  )
}

class Pp extends Component {
 
    constructor(){
        super();
        this.state= {it: 'Click text'}
     };
     changeText=()=>{
      this.setState(
        {it:(new Date()).toString()}
        
      )
     };
    render(){
      return (
        <p onClick={this.changeText}>{this.state.it}</p>
        
      )
      };
    
  }

export default Newomp