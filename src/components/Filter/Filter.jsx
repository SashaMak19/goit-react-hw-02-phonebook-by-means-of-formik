import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

const Filter = ({ inputValue, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <input type="text" value={inputValue} onChange={onChange}></input>
    </Label>
  );
};

Filter.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { Filter };
