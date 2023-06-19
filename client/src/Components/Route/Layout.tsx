import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Hero from '../Hero';
import Navbar from '../Navbar/Navbar';

import {FiLoader} from 'react-icons/fi'
import KontaktModal from '../Modals/KontaktModal';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to showcase the loading screen
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {isLoading ? (
        <motion.div
          initial={{opacity: 0 }}
          animate={{opacity: 1 }}
          transition={{ 
            duration: 0.5,
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <motion.div 
            initial={{ scale: 1.0, opacity: 0.25 }}
      animate={{ scale: 0.9, opacity: 0.75 }}
      transition={{
        yoyo: Infinity,
        duration: 0.5,
        ease: "easeIn",
      }}
          >
            <FiLoader size={70}/>
          </motion.div>
        </motion.div>
      ) : (
        <>
          <Hero />
          <Navbar />
          <Outlet />
          <Footer />

          {/* modal */}
          <KontaktModal/>
        </>
      )}
    </div>
  );
};

export default Layout;
