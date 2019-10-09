import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ReadMoreAndLess from 'react-read-more-less';
const missionCard = props => {
  const { missions } = props;
  let readMore = React.createRef();
  return (
    <Fragment>
      {missions.map((obj, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <h6 title={obj.mission_name} className="title">
              {obj.mission_name}
            </h6>
            <ReadMoreAndLess
              ref={readMore}
              className="read-more-content"
              charLimit={250}
              readMoreText="Read more"
              readLessText="Read less"
            >
              {obj.description}
            </ReadMoreAndLess>
            <hr className="new" />
            {obj.payload_ids.map((o, i) => (
              <span className="chip" key={`k_${i}`}>
                <Link to={`/payload/${o}`}>
                  <i>{o}</i>
                </Link>
              </span>
            ))}

            {/* <p>{obj.description}</p> */}
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default missionCard;
