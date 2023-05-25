import React from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import 'bootstrap/dist/css/bootstrap.css';
import Review from '../Reviews/Reviews';

function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <Review/>
    </>
  );
}

export default HomePage;
