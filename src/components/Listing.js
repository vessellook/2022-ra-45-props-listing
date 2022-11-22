import React from 'react';
import PropTypes from 'prop-types';
import Card, { propTypes as cardPropTypes } from './Card';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(cardPropTypes)),
};

const Listing = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Card {...item} key={item.listing_id} />
      ))}
    </div>
  );
};

Listing.propTypes = propTypes;

export default Listing;
