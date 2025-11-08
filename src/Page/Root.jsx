import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Carsoul from '../Components/Carsoul/Carsoul';
import PopularGames from '../Components/PopularGames/PopularGames';
import Newsletter from '../Components/Newsletter/Newsletter';
import Footer from '../Components/Footer/Footer';

const Root = () => {
  return (
    <div className='flex flex-col'>
      <title>Home - GameVerse</title>
        <Navbar></Navbar>
        <div>
        <Carsoul></Carsoul>
        </div>
        <PopularGames></PopularGames>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </div>
  );
};

export default Root;