import React from 'react';
import error from '../Components/error-404.svg';
const notFound = () => {
  return (
    <div className="noDataFound">
      <img src={error} />
    </div>
  );
};

export default notFound;
