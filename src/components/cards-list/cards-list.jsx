import React, {useState} from 'react';
import propTypes from 'prop-types';
import Card from '../card/card';

const CardsList = ({offers}) => {
  const [, setFocusCard] = useState(null);

  const handlerCardMouseOver = (offer) => {
    setFocusCard(offer);
  };

  const handlerCardMouseOut = () => {
    setFocusCard(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card key={offer.id} offer={offer} onMouseEnter={handlerCardMouseOver} onMouseLeave={handlerCardMouseOut} />)}
    </div>
  );
};

CardsList.propTypes = {
  offers: propTypes.array.isRequired,
};

export default CardsList;
