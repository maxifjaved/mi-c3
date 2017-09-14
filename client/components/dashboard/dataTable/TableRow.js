import React from 'react';

const TableRow = ({ name, height, mass, created, edited, planet }) => {
  return (
    <tr>
        <td>{name}</td>
        <td>{height}</td>
        <td>{mass}</td>
        <td>{created}</td>
        <td>{edited}</td>
        <td className="text-center">
            <a className="btn btn-info btn-xs" href="javascript:;">
                <span className="glyphicon glyphicon-edit" />
                {planet}
            </a>
        </td>
    </tr>  );
}

TableRow.propTypes = {
    name: React.PropTypes.string.isRequired,
    height: React.PropTypes.string.isRequired,
    mass: React.PropTypes.string.isRequired,
    created: React.PropTypes.string.isRequired,
    edited: React.PropTypes.string.isRequired,
    planet: React.PropTypes.string.isRequired,
}

export default TableRow;
