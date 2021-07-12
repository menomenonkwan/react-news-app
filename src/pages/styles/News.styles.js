import styled from 'styled-components';
import { css } from "@emotion/react";
import { makeStyles } from "@material-ui/core";
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  padding: 0 5rem 5rem 5rem;
  justify-self: flex-start;

  @media (max-width: 800px) {
    width: 90%;
    padding: 0;
  }
`;

export const Titling = styled.div`
  
  h3 {
    text-align: center;
    font-size: 2.5rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);    
  }
`;

export const Controls = styled.div`
  margin: 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;

  @media (max-width: 800px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    display: none;
  }

  button {
    font-family: inherit;
    margin: 1rem 0.5rem;
    background: var(--secondary);
    color: var(--white, white);
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);  
  
    @media (max-width: 800px) {
      margin: 0 0 0.5rem 0;
    }
  
    &:hover {
      background: var(--loading, black);
    }
  }
`;

export const override = css`
  display: block;
  margin: 0 auto;
  border-color: var(--loading, red);
`;

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: '1rem auto 5rem auto',
    background: 'var(--white, white)',
    '@media (max-width: 800px)': {
      width: '80%',
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontFamily: 'inherit',
    letterSpacing: '0.05rem',
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));