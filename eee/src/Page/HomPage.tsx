import React from 'react'
import Navbar from "../Components/Navbar"
import About from '../Components/About'
import Services from '../Components/Services'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
import {  Element } from 'react-scroll';
const HomPage: React.FC = () => {
  return (
    <div className="App">
    <Navbar />


    <Element name="about">
      <About />
    </Element>

    <Element name="services">
      <Services />
    </Element>

    <Element name="testimonials">
      <Testimonials />
    </Element>
        <Footer   />
    </div>
  )
}

export default HomPage