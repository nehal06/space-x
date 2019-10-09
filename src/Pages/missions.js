import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Card from '../Components/missionCard';
class missions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNoData: false,
      allMissions: []
    };
  }
  static propTypes = {
    showNoData: PropTypes.bool,
    allMissions: PropTypes.array
  };

  componentDidMount() {
    axios
      .get('https://api.spacexdata.com/v3/missions')
      .then(response => {
        // handle success
        console.log(response.data);

        if (response.status == 200) {
          this.setState({
            allMissions: response.data
          });
        } else {
          this.setState({ showNoData: true });
        }
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <div className="grid-container2">
        {this.state.showNoData && (
          <div className="noDataFound">
            <h4>No Data Found</h4>
          </div>
        )}
        {!this.state.showNoData && <Card missions={this.state.allMissions} />}
      </div>
    );
  }
}

export default missions;
