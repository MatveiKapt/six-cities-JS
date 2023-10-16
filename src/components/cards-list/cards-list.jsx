import React from 'react';
import propTypes from 'prop-types';
import Card from '../card/card';
import {connect} from 'react-redux';

const CardsList = (props) => {
  const {offers, onMouseEnter, onMouseLeave} = props;
  const handlerMouseEnter = (offer) => onMouseEnter(offer);
  const handlerMouseLeave = () => onMouseLeave;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card key={offer.id} offer={offer} onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave} />)}
    </div>
  );
};

CardsList.propTypes = {
  offers: propTypes.array,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
  currentCity: propTypes.string
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
});

export default connect(mapStateToProps, null)(CardsList);
