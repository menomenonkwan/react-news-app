import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Components
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, makeStyles } from '@material-ui/core';
import styled from 'styled-components';

const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: block;
  }
`;

const MobileMenu = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
          align-items: stretch;
  background: var(--black, black);
  height: 100vh;

  h4 {
    background: var(--blue, lightskyblue);
    color: var(--secondary, black);
    padding: 1rem;
    margin: 1rem 0;
    text-align: center;
    font-size: 3rem;
  }
`;

export const useStyles = makeStyles({
  paper: {
    width: '100%',
  }
});

const Hamburger = () => {
  const classes = useStyles();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (  
    <HamburgerMenu>
      <MenuIcon onClick={() => setMenuIsOpen(true)}/>
      <Drawer
        anchor='right'
        open={menuIsOpen}
        onClose={() => setMenuIsOpen(false)}
        classes={{ paper: classes.paper }}
      >
        <MobileMenu onClick={() => setMenuIsOpen(false)}>
          <NavLink to="/news">
            <h4>News</h4>
          </NavLink>
          <NavLink to="/books">
            <h4>Books</h4>
          </NavLink>
          <NavLink to="/movies">
            <h4>Movies</h4>
          </NavLink>
        </MobileMenu>
      </Drawer>
    </HamburgerMenu>
  );
}
 
export default Hamburger;