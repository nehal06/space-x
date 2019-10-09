import React, { Component, Fragment } from 'react';
import axios from 'axios';
import error from '../Components/error-404.svg';
class payload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNoData: false,
      payloadData: {},
      status: 200
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://api.spacexdata.com/v3/payloads/${this.props.match.params.id}`
      )
      .then(response => {
        if (response.status == 200) {
          this.setState({ payloadData: response.data });
        } else {
          console.log(response.data);
          this.setState({ showNoData: true, status: response.status });
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({ showNoData: true, status: 404 });
      });
  }
  render() {
    const { payloadData, status } = this.state;
    return (
      <Fragment>
        {this.state.showNoData && (
          <div className="noDataFound">
            <img src={error} />
          </div>
        )}

        {!this.state.showNoData && (
          <div className="payloadData card">
            <h1 className="mainTitle">Payload</h1>
            <h6 className="title">{payloadData.payload_id}</h6>

            {payloadData.manufacturer && (
              <h6 className="secondaryText">{`Nationality : ${payloadData.nationality}`}</h6>
            )}
            {payloadData.manufacturer && (
              <h6 className="secondaryText">{`Manufacturer : ${payloadData.manufacturer}`}</h6>
            )}
            {payloadData.orbit && (
              <h6 className="secondaryText">{`Orbit : ${payloadData.orbit}`}</h6>
            )}
            {payloadData.payload_mass_kg && (
              <h6 className="secondaryText">{`Mass : ${payloadData.payload_mass_kg} kg`}</h6>
            )}
          </div>
        )}
      </Fragment>
    );
  }
}

export default payload;
