import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wrapper, Btn } from './styles/Home.styles';


const Home = () => {
  
  return (  
    <Wrapper>
      <motion.h1 
        initial={{ opacity: 0, x: '-100vh' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          delay: 0.3,
          duration: 0.3,
          type: 'spring',
          stiffness: 120, 
        }}
      >
        Know
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: '-100vh' }}
        animate={{ opacity: 1, x: 0 }}    
        transition={{ 
          delay: 1.75,
          duration: 0.3,
          type: 'spring',
          stiffness: 120, 
        }}  
      >
        More
      </motion.h1>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}    
        transition={{ 
          delay: 3,
          duration: 1.5,
        }}       
      >
        built with the New York Times API
      </motion.h3>
      <Btn
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}    
        transition={{ 
          delay: 4.5,
          duration: 1.5,
        }}       
      >
        <NavLink to="/news">Let's Go</NavLink>
      </Btn>
    </Wrapper>
  );
}
 
export default Home;