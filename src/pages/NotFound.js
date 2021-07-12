import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
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
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  min-height: 90vh;
  
  h2 {
    color: var(--secondary, black);
    margin: 2rem;
  }
`;

export default function NotFound() {

  return (
    <Wrapper>
      <h1>Oops... This page does not exist</h1>
      <NavLink to="/">
        <h2>Back Home</h2>
      </NavLink>
    </Wrapper>
  );
}
