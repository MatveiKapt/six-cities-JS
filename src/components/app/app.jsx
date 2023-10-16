import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {Pages} from '../../const/const';

const App = (props) => {
  const {offers, cities} = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Pages.MAIN} element={<MainPage cities={cities}/>} />
        <Route path={Pages.LOGIN} element={<LoginPage/>}/>
        <Route path={Pages.FAVORITES} element={<FavoritesPage offers={offers}/>}/>
        <Route path={`${Pages.OFFER}/:id`} element={<OfferPage offers={offers} />}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array,
  cities: PropTypes.array,
};

export default App;
