import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { useLoaderData, useNavigation } from 'react-router';
import Card from '../Components/Card/Card';
import Footer from '../Components/Footer/Footer';
import AuthContext, { AuthanticationContext } from '../Context/AuthContext';
import { motion } from 'framer-motion';

const Games = () => {
    const games=useLoaderData();

    const navigation=useNavigation();

     if (navigation.state === 'loading') {
    return <span className="loading loading-bars loading-xl"></span>;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15 
      }
    }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <div className=' mx-auto '>
      <title>All Games - GameZone</title>
  
<Navbar></Navbar>
   <h2 className='text-3xl font-bold text-center my-2 mt-24'>All Games</h2>
<motion.div
        className='w-[95%] grid grid-cols-1 lg:grid-cols-3 gap-6 my-8 mx-auto'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
       
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
      >
        {games.map(game => (
          <motion.div key={game.id} variants={cardVariants}>
            <Card game={game} />
          </motion.div>
        ))}
      </motion.div>
<Footer></Footer>
    </div>
  );
};

export default Games;