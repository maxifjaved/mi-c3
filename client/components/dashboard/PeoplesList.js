import React, { Component } from 'react';

class PeoplesList extends Component {
  render() {
    return (<div>
       <h1>change the file in client or server folder !!</h1>
      </div>
    );
  }
}

PeoplesList.propTypes = {
  peoples: React.PropTypes.object.isRequired
}

export default PeoplesList;