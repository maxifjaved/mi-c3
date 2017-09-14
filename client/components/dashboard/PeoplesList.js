import React, { Component } from 'react';
import TableRow from './dataTable/TableRow';

class PeoplesList extends Component {
  render() {
    let tableDate;
    if(this.props.peoples[0]){
      tableDate = this.props.peoples[0].peoples.map((p, key)=>{
        return <TableRow
          key={key}
          name={p.name}
          height={p.height}
          mass={p.mass}
          created={p.created}
          edited={p.edited}
          planet={p.planet}
        />
      })
    }
    
    return (<div>
          <table className="table table-striped custab">
            <thead>
              <tr>
                <th>Name</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Created</th>
                <th>Edited</th>
                <th className="text-center">Planet (link)</th>
              </tr>
            </thead>
            <tbody>
              {tableDate}
            </tbody>
          </table>
      </div>
    );
  }
}

PeoplesList.propTypes = {
  peoples: React.PropTypes.object.isRequired
}

export default PeoplesList;