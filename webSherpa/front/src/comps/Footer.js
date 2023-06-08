import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

export default function Footer() {
    return(
        <div className="footer-app">
        <div className="footer-cont">
            <div className="footer-nav">
            <Link className="links" to="/">Home</Link>
                <Link className="links" to="/about">About</Link>
                <Link className="links" to="/services">Services</Link>
                <Link className="links" to="/contact">Contact</Link>
            </div>
            <div className="web-sherpa">
                <a className="links" href="https://websherpa.xyz">Site Designed by Web Sherpa Consulting</a>
            </div>
            <p className='copy'>&copy; Copyright 2022 websherpa.xyz</p>
        </div>
        

        </div>
    )
}