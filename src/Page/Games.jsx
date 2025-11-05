import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { useLoaderData, useNavigation } from 'react-router';
import Card from '../Components/Card/Card';
import Footer from '../Components/Footer/Footer';
import AuthContext, { AuthanticationContext } from '../Context/AuthContext';

const Games = () => {
    const games=useLoaderData();

    const navigation=useNavigation();

     if (navigation.state === 'loading') {
    return <span className="loading loading-bars loading-xl"></span>;
  }
  return (
    <div className=' mx-auto '>
  
<Navbar></Navbar>
   <h2 className='text-3xl font-bold text-center my-2 mt-24'>All Games</h2>
<div className='w-[95%] grid grid-cols-1 lg:grid-cols-3 gap-6 my-8 mx-auto'>
{
    games.map( game=> <Card key={game.id} game={game}></Card> )
}
</div>
<Footer></Footer>
    </div>
  );
};

export default Games;