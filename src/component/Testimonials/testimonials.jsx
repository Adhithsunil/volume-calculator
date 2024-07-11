import React, { useEffect, useState } from "react";
import { urlFor, client } from "../../client";
import "./testimonials.css";

const testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"][0..2]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);
  return (
    <section id="testimonials" className="dark-gray">
      <div className="wrapper">
        <h2>What customers say?</h2>

        <div className="content-container">
          {testimonials.map((testimonial) => (
            <div className="testimonial">
              <img src={urlFor(testimonial.image)} alt="./assest/testimonialM." />
              <div className="reviewer-details">
                <div className="name">{testimonial.name}</div>
                <div className="rating"> {testimonial.company}</div>
                <div className="review">{testimonial.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default testimonials;