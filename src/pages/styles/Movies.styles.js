import styled from 'styled-components';
import { css } from "@emotion/react";
import { makeStyles } from "@material-ui/core";
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  padding: 0rem 5rem 5rem 5rem;

@media (max-width: 700px) {
  width: 100%;
  padding: 0;
}
`;

export const Titling = styled.div`
  padding-top: 3rem;

h3 {
  text-align: center;
  font-size: 2.5rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);    
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
    margin: '1rem auto 4rem auto',
    background: 'var(--white, white)',

    '@media (max-width: 850px)': {
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