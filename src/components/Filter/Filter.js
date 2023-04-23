import PropTypes from 'prop-types';

export default function Filter({ inputData }) {
  return (
    <label style={{ marginBottom: '20px', display: 'inline-block' }}>
      Find contacts by name
      <br />
      <input
        className="filter-input"
        type="text"
        name="filter"
        onChange={event => inputData(event)}
      />
    </label>
  );
}

Filter.propTypes = {
  inputData: PropTypes.func.isRequired,
};
