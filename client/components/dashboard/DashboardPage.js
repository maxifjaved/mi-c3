import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersList } from '../../actions/users';

import UsersList from './UsersList';

class DashboardPage extends Component {
  constructor(params) {
    super(params);
  }
  componentDidMount() {
    this.props.getUsersList();
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <UsersList users={this.props.users} />
        </div>
      </div>
    );
  }
}
DashboardPage.propTypes = {
  users: React.PropTypes.array.isRequired,
  getUsersList: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, { getUsersList })(DashboardPage);
