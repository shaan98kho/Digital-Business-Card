// import logo from './logo.svg';
import './App.css';
import React from 'react'
import ProfPic from './components/ProfPic';
import Name from './components/Name';
import Details from './components/Details';
import Buttons from './components/Buttons';
import Footer from './components/Footer';

function App() {
  return (
    <div className='card__holder'>
      <ProfPic />

      <div className='card__details'>
        <Name />
        <Buttons />
        <Details />
      </div>

      <Footer />




    </div>
  );
}

export default App;
