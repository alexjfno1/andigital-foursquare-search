import { connect } from 'react-redux';
import FourSquareSearch from '../components/FourSquareSearch';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleSearchBoxChange: (value) => {
    dispatch({ type: 'SEARCH_BOX_CHANGE', value });
  },
  handleSearchSubmit: () => {
    dispatch({ type: 'SEARCH_SUBMIT' });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FourSquareSearch);
