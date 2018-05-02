import React from 'react';
import Carousel from './Olivet.PNG';

//We are using two curly braces for style, one for react variable and the second for style.
const Landing = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>
        Samson Home Page!
      </h1>
        My Very First React Web Site.
        <div className="Carousel">
          <img src={Carousel}/>
        </div>
    </div>

  );
};

export default Landing;
