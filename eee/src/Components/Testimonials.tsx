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
      name: 'Jerry alani',
      
      text: 'Triple EEE Catering and Events exceeded our expectations! The attention to detail and culinary expertise made our event truly special. Theyre dedication and professionalism made a lasting impression.',
    },
    {
      name: 'Belinda Smith',
      text: 'We couldn\'t have asked for a better catering and event planning partner than Triple EEE. From the initial consultation to the flawless execution, they ensured every moment was memorable. Highly recommended!',
    },
    {
      name: 'Catherine Simmons',
      text: 'Triple EEE delivered an exceptional experience for our corporate event. The menu selection was diverse, and the service impeccable. Our guests are still raving about the wonderful atmosphere they created.',
    },
    {
      name: 'David Martinez',
      text: 'Working with Triple EEE was a pleasure. The teams creativity, professionalism, and commitment to excellence made our wedding day truly magical. Thank you for making our dreams come true!',
    },
    {
      name: 'Alexandra Reynolds',
      text: 'Triple EEE Catering and Events stands out for its unmatched quality and service. From intimate gatherings to grand celebrations, they bring a touch of elegance and sophistication. Truly top-notch!',
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