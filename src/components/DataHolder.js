import PropTypes from 'prop-types';
import { data } from '../data';

const propTypes = {
  render: PropTypes.func.isRequired,
};

const DataHolder = ({render}) => {
  return render(JSON.parse(data).filter((item) => !('error_messages' in item)));
};

DataHolder.propTypes = propTypes;

export default DataHolder;
