import PropTypes from 'prop-types';
import './listing.css';
import { Item } from './Item';

export const Listing = ({items = []}) => {
  return (
    <div className="item-list">
      {items.map((item) => item.state === "active" && <Item key={item.listing_id} item={item}/>)}
    </div>
  );
}

Listing.propTypes = {
  items: PropTypes.array.isRequired
}
