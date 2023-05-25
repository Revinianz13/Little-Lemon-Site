
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import NavigBar from './components/nav/Nav';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
  <>
  <NavigBar></NavigBar>
  <Header></Header>
  <Main></Main>
  <Footer></Footer>
  </>
  );
}

export default App;
