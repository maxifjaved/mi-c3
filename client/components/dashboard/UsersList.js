import React, { Component } from 'react';

class UsersList extends Component {
  render() {
    return (<div>
       <h1>change the file in client or server folder !!</h1>
      </div>
    );
  }
}

UsersList.propTypes = {
    users: React.PropTypes.array.isRequired
  }

export default UsersList;