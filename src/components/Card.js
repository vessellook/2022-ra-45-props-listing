import React from 'react';
import PropTypes from 'prop-types';

export const propTypes = {
  listing_id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  MainImage: PropTypes.shape({
    url_570xN: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  currency_code: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

const Card = ({
  url,
  MainImage: { url_570xN: src },
  title,
  currency_code,
  price,
  quantity,
}) => {
  let quantityClassName = 'item-quantity level-medium';
  if (quantity <= 10) {
    quantityClassName = 'item-quantity level-low';
  } else if (quantity > 20) {
    quantityClassName = 'item-quantity level-high';
  }

  // странно, что в картинке-примере в задании порядок другой, например, AUD 0.50
  let wholePrice = `${price} ${currency_code}`;
  if (currency_code === 'USD') {
    wholePrice = '$' + price;
  } else if (currency_code === 'EUR') {
    wholePrice = '€' + price;
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={src} alt='title' />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{wholePrice}</p>
        <p className={quantityClassName}>{quantity} left</p>
      </div>
    </div>
  );
};

Card.propTypes = propTypes;

export default Card;
