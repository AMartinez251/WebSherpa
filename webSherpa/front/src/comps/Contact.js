import React from 'react';
import { motion } from 'framer-motion';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Contact.css';


function Contact() {

  return (
    <motion.div className='form-cont-cont'
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0 , opacity: 1}}
        transition={{ duration: 0.4, ease: "easeInOut" }}>


    <form className="form-cont" noValidate autoComplete="off">
      <p className="slogan">Contact</p>
      <div className="name">

      <TextField
        style={{ width: '48%' }}
        required
        label="First Name"
        variant="outlined"
        />
      <TextField
        style={{ width: '48%' }}
        required
        label="Last Name"
        variant="outlined"
        />
      </div>

      <TextField
        style={{ margin: '7px', width: '100%' }}
        required
        label="Email"
        type="email"
        variant="outlined"
        />
      <TextField
        style={{ margin: '7px', width: '100%' }}
        required
        label="Subject"
        variant="outlined"
        />
      <TextField
        style={{ margin: '7px', width: '100%' }}
        required
        label="Inquiry"
        multiline
        rows={4}
        variant="outlined"
        />
      <Button style={{ margin: '7px', width: '110px', height: '50px' }} variant="contained" color="primary">
        Submit
      </Button>
    </form>
  </motion.div>
  );
}

export default Contact;