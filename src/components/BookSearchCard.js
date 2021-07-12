import { Button, Card, CardActions, CardContent, Typography, makeStyles } from "@material-ui/core";
import styled from 'styled-components';

const Content = styled(CardContent)`
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

export const useStyles = makeStyles((theme) => ({
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
}));

const BookSearchCard = ({ result }) => {
  const classes = useStyles();

  return (  
    <Card>
      <Content>
        <Typography className={classes.title} variant="h5" component="h5">
          {result.book_title}
        </Typography>
        <Typography className={classes.text} gutterBottom variant="subtitle2" component="p" color="textSecondary">
          by {result.book_author}
        </Typography>
        <Typography className={classes.text} gutterBottom variant="body1" component="p" color="textPrimary">
          {result.summary}
        </Typography>
      </Content>

      <CardActions className={classes.links}>
        <Button 
          className={classes.btn} 
          fullWidth 
          size="small" 
          color="primary" 
          href={result.url} 
        >
          New York Times Review
        </Button>
      </CardActions>
    </Card>
  );
}

 
export default BookSearchCard;