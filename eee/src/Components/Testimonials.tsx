import React from 'react'
import "../styles/testimonials.css"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  const testimonials = [
    {
      name: 'John Doe',
      
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
    {
      name: 'Jane Doe',
      
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
    {
      name: 'Bob Smith',
      
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
    {
      name: 'Alice Johnson',
      
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
    {
        name: 'Alice Johnson',
        
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
      },
  ]

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-header">What Our Customers Say </h2>
      <div className="testimonials-grid">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
           <div className="testimonial-box" key={index}>
           <p className="testimonial-name">
             {testimonial.name}
           </p>
           <p className="testimonial-text">
             "{testimonial.text}"
           </p>
         </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;