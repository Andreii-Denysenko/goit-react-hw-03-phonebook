import PropTypes from 'prop-types';
import { Value } from './Filter.styled'

export const Filter = ({ filter, changeFilter }) => {
    return (
      <label>
        <p>Find contacts by name</p>
        <Value type="text" value={filter} onChange={changeFilter} />
      </label>
    );
  };

  Filter.propTypes ={
    filter: PropTypes.string,
    changeFilter: PropTypes.func,
  }