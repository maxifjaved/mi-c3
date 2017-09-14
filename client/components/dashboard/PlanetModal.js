import React, { Component } from 'react';
import TableRow from './dataTable/TableRow';

class PlanetModal extends Component {
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
          
            <div className="modal-dialog" style={{marginTop: '1%'}}>
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title">Modal title</h4>
            </div>
            <div className="modal-body">
            <table className="table table-striped custab">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Created</th>
                        <th>Edited</th>
                        <th>Planet (link)</th>
                    </tr>
                    </thead>
                    <tbody>
                        {tableDate}
                    </tbody>
                </table>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
            </div>{/* /.modal-content */}
        </div>
      </div>
    );
  }
}

PlanetModal.propTypes = {
  peoples: React.PropTypes.object.isRequired
}

export default PlanetModal;