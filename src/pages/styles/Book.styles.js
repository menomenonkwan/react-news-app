import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import { css } from "@emotion/react";
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  padding: 0rem 5rem 5rem 5rem;
  justify-self: flex-start;
`;

export const Controls = styled.div`
margin: 1rem;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: center;
-ms-flex-pack: center;
        justify-content: center;
button {
  font-family: inherit;
  margin: 1rem 0.5rem;
  background: var(--secondary);
  color: var(--white, white);

  @media (max-width: 800px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    display: none;
  }

  &:hover {
      background: var(--loading, black);
  }
}
`;

export const Titling = styled.div`
 
  h3 {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 2.5rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5); 
  }
`;

export const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const Search = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 5rem;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;

  @media (max-width: 800px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
`;


export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    marginLeft: '1rem',
    '@media (max-width: 800px)': {
      margin: 0,
      width: '100%',
      marginTop: '1rem',
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
  search: {
    width: '15rem',
    marginRight: '1rem',
    '@media (max-width: 800px)': {
      margin: 0,
      width: '100%',
    },
  }
}));