
import React, { useState, useEffect, Fragment } from 'react';
import DataTable from 'react-data-table-component';
import data from './data.json';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import validator from 'validator'
import edit from "../assets/edit.png";
import deleted from "../assets/deleted.png";
import close from "../assets/close.png";
function Clients() {
  const columns = [
    {
        name: 'BUSINESS NAME',
        selector: 'business_name',
        sortable: true,
    },
    {
        name: 'CONTACT NAME',
        selector: 'contact_name',
        sortable: true,
    },
    {
        name: 'EMAIL',
        selector: 'email',
        sortable: true,
    },
    {
        name: 'PHONE',
        selector: 'email'
    },
    {
        name: 'COUNTRY',
        selector: 'country'
    },
    {
        name: 'ACTION',
        className: "Action",
        align: "left",
        sortable: true,
        cell: (record, key) =>
            <div>
                <img src={edit} alt="edit" style={{width: "21%",cursor: "pointer"}} className=" mr-1" id="edit" onClick={() => actionChange("edit", key)}/>
                <img src={deleted} alt="delete" style={{width: "30%",cursor: "pointer"}} className=" btn-sm" id="delete" onClick={() => actionChange("delete", key)}/>

            </div>

    },
];
const submitData = ()=>{
  var errorForm ={}
  Object.keys(form).forEach(function(val,key){
    if(form[val]==''){
      errorForm[val]="Enter Value"
    }
    if(val=='email' && new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(form.email)!=true){
      errorForm[val]="Enter Value"
    }
  
  })
  setError(errorForm);
  if(Object.keys(errorForm).length==0){
   
    if(isEdit){
      data[index] = form
      setFinalData(data);
      
    }else{
      finalData.push(form);
      setFinalData(finalData)
    }
   
    console.log("------------------------");
    console.log(finalData);
  setForm({
    "business_name":"",
    "contact_name":"",
    "email":"",
    "phone":"",
    "country":""
  })
  setShow(false)
  }
  
}
const newUser = ()=>{
  setIsEdit(false);
  setIndex('');
  setShow(true)
}
const onChange = (e) => {
  // e.preventDefault();
  const { id, value } = e.target;
  console.log(form)
  var formVal = {};
  formVal.business_name = form.business_name;
  formVal.contact_name = form.contact_name;
  formVal.email = form.email;
  formVal.phone = form.phone;
  formVal.country = form.country;
  formVal[id] = value
  setForm(formVal)
  // console.log(form)
}
const iniForm = {
  "business_name":"",
  "contact_name":"",
  "email":"",
  "phone":"",
  "country":""
}
const errorInit ={
  "business_name":"",
  "contact_name":"",
  "email":"",
  "phone":"",
  "country":""
}
  const [finalData, setFinalData] = useState(data);
  const [error, setError] = useState(errorInit);
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [form,setForm]=useState(iniForm);
  const [index,setIndex]=useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function actionChange(actionText, key) {
    var filter = finalData;
    var pushData = []
    switch (actionText) {
        case 'edit': {
          setForm(finalData[key]);
          setIndex(key)
          setIsEdit(true);
          setShow(true)
          break;
        }
        case 'delete': {
          console.log(key)
            // var a = filter.splice(key, 1);
            var first = filter.slice(0,key);
            var currentKey = key
            var secound = filter.slice(currentKey+1);
            pushData =[...first,...secound];
            setFinalData(pushData)
            break;
        }
    }
}
useEffect(() => { setFinalData(data)},[])
    return (
        <div className="App">
            <Button className="float-right mt-3 btnStyle" style={{backgroundColor:"#F15642"}}  onClick={handleShow,newUser}>
        New User
      </Button>

      <Modal className="p-2" show={show} onHide={handleClose}>
       
        <div class="row">
          <div className="col-lg-11">
          <h6 style={{fontSize:"30px"}}>{isEdit ? 'Edit' : 'Add'}Client</h6>
          </div>
          <div className="col-lg-1">
            <img src={close} alt="close" style={{width: "40px"}} onClick={handleClose}/>
          </div>
        </div>
        <br></br>
        <div class="row">
        <div class="form-group col-lg-6">
          <label for="business_name">Business Name:</label>
          <input type="input" className="form-control" value={form.business_name} id="business_name" onChange={onChange}   className={error && error.business_name ? 'error form-control' : 'form-control'} />
         
        </div>
        <div class="form-group col-lg-6">
          <label for="contact_name">contact_name:</label>
          <input type="input" className="form-control" value={form.contact_name} id="contact_name" onChange={onChange} className={error && error.contact_name ? 'error form-control' : 'form-control'} />
          
        </div>
        <div class="form-group col-lg-6">
          <label for="email">email:</label>
          <input type="input" className="form-control" value={form.email} id="email" onChange={onChange} className={error && error.email ? 'error form-control' : 'form-control'}/>
        </div>
        <div class="form-group col-lg-6">
          <label for="phone">Phone:</label>
          <input type="input" className="form-control" value={form.phone} id="phone" onChange={onChange} className={error && error.phone ? 'error form-control' : 'form-control'}/>
        </div>
        <div class="form-group col-lg-6">
          <label for="country">Country:</label>
          <input type="input" className="form-control" value={form.country} id="country" onChange={onChange} className={error && error.country ? 'error form-control' : 'form-control'}/>
        </div>
          
        </div>
        <div className="row">
          <div className="col-lg-12">
          <Button className="float-right mt-3 btnStyle" style={{backgroundColor:"#F15642"}} onClick={handleShow,submitData}>
        {isEdit ? 'Edit' : 'Add'} User
      </Button>
          </div>
        </div>
   
      </Modal>

            <DataTable
                columns={columns}
                data={finalData}
                pagination
                highlightOnHover
            />
        </div>
    );
 
}
export default Clients;