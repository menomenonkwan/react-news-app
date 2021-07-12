import styled from 'styled-components';
import { withStyles } from "@material-ui/styles";
import { Button, Card, CardContent, makeStyles, Paper } from "@material-ui/core";

export const Wrapper = styled(Card)`
  max-width: 1000px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 2rem;
  padding: .5rem 1rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;

  .link {
    color: var(--blue, lightskyblue);
  }

  @media (max-width: 850px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding: 2rem 0;
  }
`;

export const StyledPaper = styled(Paper)`
  width: 210px;
  height: 140px;

  img {
    width: 210px;
    height: 140px;
    border-radius: 4px;
  }
`;

export const Content = styled(CardContent)`
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
  -webkit-box-align: start;
  -ms-flex-align: start;
          align-items: flex-start;
  
  @media (max-width: 850px) {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    text-align: left;
    width: 90%;
    padding: 0;
  }
`;

export const StyledButton = withStyles({
  root: {
    background: 'var(--secondary, cornflowerblue)',
    borderRadius: 3,
    border: 0,
    color: 'var(--white, white)',
    padding: '0.5rem 2rem',
    boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
    wordBreak: "break-word",
  },
  label: {
    fontSize: '1.1rem',
    textTransform: 'capitalize',
  },
})(Button);

export const useStyles = makeStyles({
  card: {
    background: 'var(--white, white)',
  },
  title: {
    fontFamily: 'var(--title), serif',
  },
  text: {
    fontFamily: 'inherit',

    '@media (max-width: 850px)': {
      marginBottom: '2rem',
    },
  },
  btn: {
    fontFamily: 'var(--title), serif',
    fontWeight: 'bold',
    
    '&:hover': {
      background: 'var(--loading, lightskyblue)',
    }
    
  },
});