import React from 'react';
import classnames from 'classnames';

const TableData = ({ field, value, label, error, type, onChange, onBlur }) => {
  return (
    <td>
      
        {error && <span className="help-block">{error}</span>}
    </td>  );
}

TableData.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func
}

export default TableData;
