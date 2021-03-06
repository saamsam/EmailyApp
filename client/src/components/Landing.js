import React from 'react';
import Horse from './horse2.PNG';
import DateTime from './DateTime';

//We are using two curly braces for style, one for react variable and the second for style.
const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Building Better Apps!</h1>
      Welcome, We Are Glad You Are Here!
      <div className="carousel-fixed-item center">
        <img src={Horse} />
      </div>
      <DateTime />
    </div>
  );
};

export default Landing;
