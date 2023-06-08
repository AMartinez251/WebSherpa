import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import './Services.css';

const sliderElements = [
  {
    title: 'Website design & development',
    description: `A visually appealing and user-friendly website that meets your business's needs
    Increased online sales and conversions
    Enhanced brand identity and reputation`
  },
  {
    title: 'E-commerce website setup',
    description: `A fully functional and user-friendly e-commerce platform
    - Increased online sales and conversions
    - Enhanced shopping experience for customers`
  },
  {
    title: 'Sales Copy',
    description: `Tailored to target audience for maximum conversions.
    - Optimized for search engines to increase visibility.
    - Continuous support to ensure the copy is tailored to your needs and goals.`
  },
  {
    title: 'Social media management',
    description: `Consistently updated and engaging social media profiles
    - Improved brand visibility and reputation
    - Enhanced customer service and support`
  },
  {
    title: 'Email marketing setup and strategy',
    description: `Targeted and effective email campaigns
    - Improved customer loyalty and retention
    - Increased online sales and conversions`
  }
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  const handleNext = () => {
    controls.start({
      opacity: 0,
      transition: { duration: 0.5 }
    });

    setTimeout(() => {
      setCurrentIndex(currentIndex === sliderElements.length - 1 ? 0 : currentIndex + 1);
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 }
      });
    }, 600);
  };

  const handlePrev = () => {
    controls.start({
        opacity: 0,
      transition: { duration: 0.5 }
    });

    setTimeout(() => {
      setCurrentIndex(currentIndex === 0 ? sliderElements.length - 1 : currentIndex - 1);
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 }
      });
    }, 600);
  };

  const handleButtonClick = (e) => {
    var ind = e.target.getAttribute("num");
    console.log(ind)
    controls.start({
      opacity: 0,
      transition: { duration: 0.5 }
    });

    setTimeout(() => {
      setCurrentIndex(Number(ind));
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 }
      });
    }, 600);
  };

  return (
    <motion.div className='form-cont-cont'
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: 0 , opacity: 1}}
    transition={{ duration: 0.4, ease: "easeInOut" }}>
      <div className="form-cont">

      <motion.div className="slider__element" animate={controls}>
      <Link className="slider__links" to="/contact"><h2 className="slider__title">{sliderElements[currentIndex].title}</h2></Link>
        <p className="slider__description">{sliderElements[currentIndex].description}</p>
      </motion.div>


        <div className="buttons">
            <IconButton className="slider__prev slider__arrow" onClick={handlePrev}>
              <KeyboardArrowLeftIcon/>
            </IconButton>
            <div className="slider__dots">
                {sliderElements.map((_, index) => (
                  <div
                  key={index}
                  num={index}
                  className={`slider__dot`}
                  onClick={handleButtonClick}
                  active={currentIndex === index ? 'true' : 'false'}
                  />
                  ))}
            </div>
            <IconButton className="slider__next slider__arrow" onClick={handleNext}>
              <KeyboardArrowRightIcon/>
            </IconButton>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;