import React from 'react';
import { motion } from 'framer-motion';

import './About.css';


function About() {

  return (
    <motion.div className='form-cont-cont'
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0 , opacity: 1}}
        transition={{ duration: 0.4, ease: "easeInOut" }}>


    <div className="form-cont">
      <p className="slogan">About</p>
      <p className='use-sans'>WebSherpa is a web services tech company in Southern California that has been serving small businesses for the past 3 years. Our goal is to provide top-notch customer service and attention to detail. We specialize in web design, development, and online marketing services to help small businesses establish a professional online presence.
      </p>

    </div>
  </motion.div>
  );
}

export default About;