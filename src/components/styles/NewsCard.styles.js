import styled from 'styled-components';
import { Card, makeStyles } from "@material-ui/core";

export const Wrapper = styled(Card)`
  
  .title {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    color: var(--white, white);
    background: rgba(0,0,0,0.4);
    font-weight: normal;
    font-size: 1.75rem;
    padding: 0.5rem 1rem;
    
  }
  .source {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.5rem 1rem;

    h4 {
      color: var(--white, white);
      font-size: 1.05rem;
      font-weight: lighter;
    }
  }
`;

export const useStyles = makeStyles({
  card: {
    background: 'linear-gradient(#e0e0e0, var(--white, white))',
  },
  heading: {
    padding: 0,
    margin: 0,
    position: 'relative',
  },
  media: {
    height: 300
  },
  description: {
    fontSize: '0.9rem',
    fontFamily: 'inherit',
  },
  date: {
    fontFamily: "var(--title), serif",
    fontStyle: 'italic',
    textAlign: 'right',
    margin: '1rem 0',
    fontSize: '0.85rem',
  },
  btn: {
    fontFamily: "var(--title), serif",
    color: 'var(--secondary, #3f51b5)',
  },
});