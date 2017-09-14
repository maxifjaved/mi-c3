import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeoplesList } from '../../actions/peoples';

import PeoplesList from './PeoplesList';
import Paging from '../common/Paging';

class DashboardPage extends Component {
  constructor(params) {
    super(params);
    this.changePage = this.changePage.bind(this)
  }
  componentDidMount() {
    this.props.getPeoplesList();
  }

  changePage(number){
      this.props.getPeoplesList(number);
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-2 custyle">
          <PeoplesList peoples={this.props.peoples} />
          <Paging peoples={this.props.peoples} changePage={this.changePage}/>
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
