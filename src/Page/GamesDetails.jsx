import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import GameDetails from '../Components/GameDetails/GameDetails';
import { HeadProvider, Title } from 'react-head';

const GamesDetails = () => {
    const params=useParams();
    const data=useLoaderData();


    const desiredData=data.find(d=> d.id==params.id);
    const title=desiredData ? desiredData.title : "Game Details";


 useEffect(()=> 
  {
    document.title=`${title} - GameVerse`;

  },[title])

   
  return (
    <div>
      
      
        <Navbar></Navbar>
     <GameDetails desiredData={desiredData}></GameDetails>
        <Footer></Footer>
    </div>
  );
};

export default GamesDetails;