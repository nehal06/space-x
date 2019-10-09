import React, { Fragment } from 'react';

import ReadMoreAndLess from 'react-read-more-less';
const launchCard = props => {
  const { launchpads } = props;
  let readMore = React.createRef();
  return (
    <Fragment>
      {launchpads.map((obj, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <h6 title={obj.site_name_long} className="title">
              {obj.name}
            </h6>
            <span className={`status ${obj.status.replace(' ', '-')}`}>
              <i>{obj.status}</i>
            </span>
            <p className="location">
              <i>{`${obj.location.name} , ${obj.location.region}`}</i>
            </p>
            <ReadMoreAndLess
              ref={readMore}
              className="read-more-content"
              charLimit={250}
              readMoreText="Read more"
              readLessText="Read less"
            >
              {obj.details}
            </ReadMoreAndLess>
            {/* <p>{obj.details}</p> */}
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default launchCard;
