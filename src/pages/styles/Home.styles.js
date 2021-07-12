import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--black, black);
  -webkit-box-flex: 1;
  -ms-flex: 1;
          flex: 1;
  width: 100%;
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
  color: var(--blue, lightskyblue);

  h1 {
    font-size: 6rem;
    font-weight: lighter;
    margin: 0;
    padding: 0;
  }

  h3 {
    margin: 1rem;
  }
`;

export const Btn = styled(motion.div)`
  margin: 2rem;

a {
  font-family: var(--title), serif;
  background: var(--blue, lightskyblue);
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
  border-radius: 2rem;
  border: 2px solid var(--blue, lightskyblue);
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
  &:hover {
    background: var(--black, black);
    color: var(--blue, lightskyblue);
  }
}
`;