import { motion } from 'framer-motion';
import styled from 'styled-components';
import NavBar from './NavBar';
import Hamburger from './Hamburger';

const StyledHeader = styled(motion.header)`
  background: var(--blue, lightskyblue);
  color: var(--black, black);
  width: 100%;
  min-height: 10vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  padding: 0 1rem;
`;

const Logo = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 1.15rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
`;


const Header = () => {

  return (  
    <StyledHeader
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}    
      transition={{ 
        delay: 3,
        duration: 2.5,
      }}  
    >
      <Logo>
        <h1>NYTimes App</h1>
      </Logo>
      <NavBar />
      <Hamburger />
    </StyledHeader>
  );
}
 
export default Header;