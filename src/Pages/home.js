import React from 'react';
import '../css/particle.css';
// import dog from '../Components/astronaut.svg';
const home = props => {
  const items = [];
  for (let i = 0; i <= 1000; i++) {
    items.push(<div className="particle" key={`p${i}`}></div>);
  }

  return (
    <div id="particle-container">
      {items}

      {/* <div className="spaceImg">
        <img src={dog} />
      </div> */}
    </div>
  );
};

export default home;
