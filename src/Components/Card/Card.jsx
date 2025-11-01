import React from 'react';

const Card = ({game}) => {
    console.log(game)
  return (
    <div className="card bg-base-100  shadow-sm h-full">
  <figure>
    <img
      src={game.coverPhoto}
      className='h-64'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{game.title}</h2>
    <p>{game.description}</p>
    <div className="card-actions justify-between items-center">
        <h2 className='btn btn-outline btn-primary p-3 rounded-3xl'>{game.ratings}</h2>
      <button className="btn btn-primary">Install Now</button>
    </div>
  </div>
</div>
  );
};

export default Card;