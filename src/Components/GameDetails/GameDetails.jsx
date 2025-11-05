import React from 'react';
import { Link, useNavigate } from 'react-router';

const GameDetails = ({desiredData}) => {
    const navigate=useNavigate();
   
  return (
    <div className='flex justify-center flex-col my-16 items-start w-[70%] mx-auto gap-2'>
        <img src={desiredData.coverPhoto} alt="" className='w-[80%]' />
        <h3 className='text-2xl font-bold lg:text-5xl'>{desiredData.title}</h3>
        <h3 className='text-gray-400 text-lg'>{desiredData.developer}</h3>
        <p className="text-md">{desiredData.description}</p>
        <h2 className='btn btn-outline btn-primary p-3 rounded-3xl'>Ratings: {desiredData.ratings}</h2>
        <div className='flex flex-col lg:flex-row mx-[5%] lg:mx-[35%] my-4 gap-6 justify-center'>
        <button onClick={() => navigate(-1)} className="btn btn-accent w-full text-xl">Back</button>
        <Link to={desiredData.downloadLink} className="btn btn-primary w-full text-xl">Install Now</Link>
        </div>
        


    </div>
  );
};

export default GameDetails;