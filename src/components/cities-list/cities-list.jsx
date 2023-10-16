import React from "react";
import propTypes from "prop-types";
import {ActionCreater} from "../../store/action";
import {connect} from "react-redux";

const CitiesList = (props) => {
  const {cities, currentCity, changeCity} = props;
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => <li key={city.id} className="locations__item">
        <a className={`locations__item-link tabs__item ${city.name === currentCity && `tabs__item--active`}`} onClick={() => changeCity(city.name)} href="#">
          <span>{city.name}</span>
        </a>
      </li>)}
    </ul>
  );
};

CitiesList.propTypes = {
  cities: propTypes.array,
  currentCity: propTypes.string,
  changeCity: propTypes.func,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreater.changeCity(city));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

