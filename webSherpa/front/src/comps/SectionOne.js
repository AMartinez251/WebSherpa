import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './SectionOne.css';

const SectionOne = () => {
  return (
        <motion.div className='form-cont-cont'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1, ease: "easeInOut" }}>
          <div className="form-contt">
            <Link className="link" to="/contact">
              <p className="slogan">Scale new heights with WebSherpa!</p>
            </Link>
          </div>
        </motion.div>
  );
}

export default SectionOne;