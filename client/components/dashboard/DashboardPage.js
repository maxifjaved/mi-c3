import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeoplesList } from '../../actions/peoples';

import PeoplesList from './PeoplesList';

class DashboardPage extends Component {
  constructor(params) {
    super(params);
  }
  componentDidMount() {
    this.props.getPeoplesList();
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <PeoplesList peoples={this.props.peoples} />
        </div>
      </div>
    );
  }
}
DashboardPage.propTypes = {
  peoples: React.PropTypes.object.isRequired,
  getPeoplesList: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    peoples: state.peoples
  }
}

export default connect(mapStateToProps, { getPeoplesList })(DashboardPage);
