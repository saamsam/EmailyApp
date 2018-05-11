import React from 'react';
import Horse from './horse2.PNG';

//We are using two curly braces for style, one for react variable and the second for style.
const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>SunTech Inc.!</h1>
      Welcome, We Are Glad You Are Here!
      <div className="Carousel">
        <img src={Horse} />
      </div>
    </div>
  );
};

export default Landing;
