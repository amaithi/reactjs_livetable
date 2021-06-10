import React, { Component,useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../style.css';

import below from "../assets/below.png";
import logout from "../assets/logout.png";
import user from "../assets/user.png";
class Header extends Component {
  state = {
    activeIndex: null
  }
  handleClick = (index) => this.setState({ activeIndex: index });
  render() {
    const clickables = [
    { name: "DASHBOARD" },
    { name: "CLIENTS" },
  ];
  return (
    <div>
      <div style={{width:"20%",float:"left"}}>
      <div  className="side_first" style={{position: "relative"}} >
      { clickables.map((clickable, i) => {
          return <Navbar 
            key={ clickable.name }
            name={ clickable.name }
            index={ i }
            isActive={ this.state.activeIndex === i }
            onClick={ this.handleClick }
          />
        })
      }
  </div>
  <div>
    <img src={user} alt="user" style={{position: "absolute",top: "321px",width: "122px",left: "90px"}}/>
  </div>
  <div className="side_bottom pt-5" style={{color:"white"}}>
      <div className="text-center" >
        <span>Jack Daniels</span>
        <br></br>
        <span>demo@gmail.com</span>
        <br></br>
        <br></br>
        <span className="font-weight-bolder">(Administrator)</span>
      </div>
      <br></br>
      <div>
        <div className="bottom pl-4">
          <img src={below} alt="img" style={{width:"24px"}}/><span style={{paddingLeft:"5px"}}>CHANGE PASSWORD</span>
        </div>
        <div className="bottom pl-4">
          <img src={logout} alt="img" style={{width:"24px"}}/><span style={{paddingLeft:"5px"}}>Logout</span>
        </div>
      </div>
    </div>
  </div>  
</div>
  )
  }
}

export default Header;