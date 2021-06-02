import Header from '../../common/header/header';
import React, { useState } from "react";
import Modal from "react-modal";
import { Paper,Tabs, Tab, TextField, Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';


const LoginRegister = function () {
  const [isOpen, setIsOpen] = useState(false);
  const [value,setValue]=React.useState(0);
  
  const handleChange= (e,newValue)=>{
    setValue(newValue);
  }
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>Login</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Login"         
      >
    
          <Tabs
          value={value}
          onChange = {handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          >
            <Tab label="Login">           
            </Tab>
            <Tab label="Register">           
            </Tab>
            </Tabs>
            <Grid conntainer>
            <Grid item xs={6}>
              <div>
              <TextField id="standard-basic" label="Username*" />
              </div>
              <div>
              <TextField id="standard-basic" label="Password*" />
              </div>
              <br/>
              <div>
              <Button variant="contained" color="primary">Login</Button>
              </div>
            </Grid>
            </Grid>             
    
      </Modal>

    </div>
  )}
  export default LoginRegister;