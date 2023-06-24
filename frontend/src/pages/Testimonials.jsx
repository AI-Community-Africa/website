import React from 'react';

function Testimonials() {
  return (
    <div>
      <h1>Testimonials</h1>
      <div className="testimonial">
        <img src="avatar1.jpg" alt="Avatar" />
        <h2>John Doe</h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          vestibulum tellus vel turpis eleifend, in pretium urna pulvinar.
          Nulla facilisi. Vestibulum condimentum rhoncus libero ac bibendum."
        </p>
      </div>
      <div className="testimonial">
        <img src="avatar2.jpg" alt="Avatar" />
        <h2>Jane Smith</h2>
        <p>
          "Vestibulum condimentum rhoncus libero ac bibendum. Ut vestibulum
          tellus vel turpis eleifend, in pretium urna pulvinar. Nulla
          facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        </p>
      </div>
      <div className="testimonial">
        <img src="avatar3.jpg" alt="Avatar" />
        <h2>David Johnson</h2>
        <p>
          "Nulla facilisi. Vestibulum condimentum rhoncus libero ac bibendum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          vestibulum tellus vel turpis eleifend, in pretium urna pulvinar."
        </p>
      </div>
      <footer>
        <p>&copy; 2023 AI Community Africa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Testimonials;
