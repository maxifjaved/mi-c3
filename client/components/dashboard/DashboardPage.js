import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeoplesList, searchPeoples } from '../../actions/peoples';

import PeoplesList from './PeoplesList';
import Paging from '../common/Paging';
import TextFieldGroup from '../common/TextFieldGroup';

class DashboardPage extends Component {
  constructor(params) {
    super(params);
    this.state = {
      search: ''
    }
    this.onChange = this.onChange.bind(this)
    this.changePage = this.changePage.bind(this)
  }
  componentDidMount() {
    this.props.getPeoplesList();
  }

  changePage(number){
      if(this.state.search) return this.props.searchPeoples(this.state.search, number);

      this.props.getPeoplesList(number);
  }
  onChange(e){
     this.setState({[e.target.name]: e.target.value});

     this.props.searchPeoples(e.target.value);
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-md-12 custyle">
          <div  className="col-md-4 col-md-offset-8">
            <TextFieldGroup
              label='Enter To Search From People'
              value={this.state.search}
              field="search"
              onChange={this.onChange}
            />
          </div>
          <PeoplesList peoples={this.props.peoples} />
          <Paging peoples={this.props.peoples} changePage={this.changePage}/>
        </div>
      </div>
    );
  }
}
DashboardPage.propTypes = {
  peoples: React.PropTypes.object.isRequired,
  getPeoplesList: React.PropTypes.func.isRequired,
  searchPeoples: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    peoples: state.peoples
  }
}

export default connect(mapStateToProps, { getPeoplesList, searchPeoples })(DashboardPage);
