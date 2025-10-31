import React, { use } from 'react';
import Card from '../Card/Card';
const gamesPromise=fetch('/games.json').then(r=>r.json());
const PopularGames = () => {
    const gamesData=use(gamesPromise)
  
    const sortedGames = gamesData.sort((a, b) => b.ratings - a.ratings);
    const popularGame=sortedGames.slice(0,3);


  return (
    <div className='w-[90%] mx-auto mb-16'>
        <h2 className='text-3xl font-bold text-center my-6'>Popular Games</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6  mx-auto'>
      { 
popularGame.map(i=><Card key={i.id} game={i}></Card>)
      }
      </div>
    </div>
  );
};

export default PopularGames;