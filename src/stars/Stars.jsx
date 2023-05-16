import PropTypes from 'prop-types';
import { Star } from "./Star";
import './stars.css';

export const Stars = ({count}) => {
  if (count < 1 || count > 5) {
    return null;
  }
  const arrStars = [];
  for (let i = 0; i < count; i++) {
    arrStars.push(<Star key={'id-' + i}/>)
  }

  return (
    <ul className='stars'>{arrStars}</ul>
  );
};

Stars.propTypes = {
  count: PropTypes.number.isRequired,
}