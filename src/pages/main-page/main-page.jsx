import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CardsList from '../../components/cards-list/cards-list';
import Logo from '../../components/logo/logo';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import SortList from '../../components/sort-list/sort-list';
import {ActionCreater} from '../../store/action';

const MainPage = (props) => {
  const {offers, cities, currentCity, currentSortType, openedSortTypesList} = props;
  const cityOffers = offers.filter((offer) => currentCity === offer.city);
  const [focusCard, setFocusCard] = useState(null);

  const handlerCardMouseOver = (offer) => {
    setFocusCard(offer);
  };

  const handlerCardMouseOut = () => {
    setFocusCard(null);
  };
  return (
    <>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList cities={cities}/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityOffers.length} places to stay in {currentCity}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by </span>
                  <span className="places__sorting-type" tabIndex={0} onClick={openedSortTypesList}>
                    {currentSortType}
                    <svg className="places__sorting-arrow" width={7} height={4}>
                      <use xlinkHref="#icon-arrow-select" />
                    </svg>
                  </span>
                  <SortList />
                </form>
                <CardsList offers={cityOffers} onMouseEnter={handlerCardMouseOver} onMouseLeave={handlerCardMouseOut}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"><Map offers={offers} activeItem={focusCard}/></section>
              </div>
            </div>
          </div>
        </main>
      </div>

    </>
  );
};

MainPage.propTypes = {
  offers: PropTypes.array,
  cities: PropTypes.array,
  currentCity: PropTypes.string,
  currentSortType: PropTypes.string,
  openedSortTypesList: PropTypes.func,
};

const mapStateToProps = (state) => ({
  offers: state.offersList,
  currentCity: state.currentCity,
  currentSortType: state.currentSortType,
});

const mapDispatchToProps = (dispatch) => ({
  openedSortTypesList() {
    dispatch(ActionCreater.openSortTypesList());
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
