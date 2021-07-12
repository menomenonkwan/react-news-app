import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;

  @media (max-width: 700px) {
    display: none;
  }

  h4 {
    padding: 0.25rem 1rem;
    margin: 0 0.5rem;
    font-size: 1.25rem;
    font-weight: normal;
    position: relative;
    -webkit-transition: all 0.25s ease;
    -o-transition: all 0.25s ease;
    transition: all 0.25s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0;
      height: 0;
      background: transparent;
      -webkit-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      background: transparent;
      -webkit-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }

    &:hover {
      color: var(--white, white);
      text-shadow: 1px 1px 1px rgba(0,0,0,0.5);

      &::after {
        width: 100%;
        height: .1rem;
        background: var(--white, white);
      }
      &::before {
        width: 100%;
        height: .1rem;
        background: var(--white, white);
      }
    }
  }
`;


const NavBar = () => {
  return (  
    <StyledNav>
      <NavLink to="/news">
        <h4>News</h4>
      </NavLink>
      <NavLink to="/books">
        <h4>Books</h4>
      </NavLink>
      <NavLink to="/movies">
        <h4>Movies</h4>
      </NavLink>
    </StyledNav>
  );
}
 
export default NavBar;