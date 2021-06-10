import React from 'react';
import logo from '../assets/logo.png'
import '../style.css';
const TopHeader = () => {
  return <div className="row p-3 shadow_border">
      <div className="col-lg-2">

          <img src={logo} alt="log" style={{width:"53px",float:'left'}} />
          <h5 className="font-weight-bold" style={{paddingTop:"20px"}}>iNextLabs</h5>
      </div>
     
     
      <div className="col-lg-10">
      <h5 className="font-weight-bolder float-right" style={{paddingTop:"20px"}}>Administrative Control Panel</h5>
      </div>
  </div>
}

export default TopHeader;