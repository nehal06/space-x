import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Card from '../Components/launchCard';
import PropTypes from 'prop-types';
class launchpad extends Component {
  static propTypes = {
    allLaunchpads: PropTypes.array,
    filteredLaunchpads: PropTypes.array,
    statusArray: PropTypes.array,
    showNoData: PropTypes.bool,
    selectVal: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.state = {
      showNoData: false,
      allLaunchpads: [],
      filteredLaunchpads: [],
      statusArray: [],
      selectVal: 'All'
    };
  }
  componentDidMount() {
    axios
      .get('https://api.spacexdata.com/v3/launchpads')
      .then(response => {
        // handle success
        console.log(response.data);

        if (response.status == 200) {
          let statusArray = [];
          response.data.map(obj => {
            if (statusArray.length == 0) {
              statusArray.push(obj.status);
            } else if (!statusArray.includes(obj.status)) {
              statusArray.push(obj.status);
            }
          });
          this.setState({
            allLaunchpads: response.data,
            filteredLaunchpads: response.data,
            statusArray
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

  onSelectChange = e => {
    let val = e.target.value;
    let filteredLaunchpads = [];
    if (val != 'All') {
      filteredLaunchpads =
        this.state.allLaunchpads.length != 0
          ? this.state.allLaunchpads.filter(o => o.status == val)
          : [];
    } else {
      filteredLaunchpads = this.state.allLaunchpads;
    }

    this.setState({ filteredLaunchpads, selectVal: val });
  };
  render() {
    console.log('render');
    return (
      <Fragment>
        <div className="filterRow">
          <label htmlFor="statusFilter" className="selectLabel">
            Status Filter
          </label>
          <select
            id="statusFilter"
            onChange={this.onSelectChange}
            value={this.state.value}
          >
            <option value="All">All</option>
            {this.state.statusArray.map((o, i) => (
              <option value={o} key={i}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="grid-container">
          {this.state.showNoData && (
            <div className="noDataFound">
              <h4>No Data Found</h4>
            </div>
          )}
          {!this.state.showNoData && (
            <Card launchpads={this.state.filteredLaunchpads} />
          )}
        </div>
      </Fragment>
    );
  }
}

export default launchpad;
