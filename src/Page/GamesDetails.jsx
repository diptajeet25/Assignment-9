import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import GameDetails from '../Components/GameDetails/GameDetails';

const GamesDetails = () => {
    const params=useParams();
    const data=useLoaderData();


    const desiredData=data.find(d=> d.id==params.id);
    console.log(desiredData);
  return (
    <div>
        <Navbar></Navbar>
     <GameDetails desiredData={desiredData}></GameDetails>
        <Footer></Footer>
    </div>
  );
};

export default GamesDetails;