// Components
import { Avatar, Button, Card, CardActions, CardContent, makeStyles, Typography } from "@material-ui/core";
// Styles
import styled from 'styled-components';

const Wrapper = styled(Card)`
  position: relative;

  span {
    font-family: "'EB Garamond', serif";
  }
  img {
    width: 100%;
  }
`;


const useStyles = makeStyles({
  title: {
    fontFamily: "'EB Garamond', serif",
  },
  avatar: {
    background: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '0',
  },
  description: {
    margin: '1rem 0',
    fontSize: '0.85rem',
  },
  author: {
    fontFamily: 'inherit',
    fontSize: '0.95rem',
  },
  links: {
    flexDirection: 'column',
  },
  btn: {
    fontFamily: "'EB Garamond', serif",
    padding: '0.5rem',
  },
});

const BookCard = ({ book }) => {
  const classes = useStyles();

  return (  
    <Wrapper elevation={5}>
      <Avatar className={classes.avatar}>{book.rank}</Avatar>
      <img src={book.book_image} alt={book.title} />
      <CardContent>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
          {book.title}
        </Typography>
        <Typography className={classes.description} variant="body1" color="textSecondary" component="p">
          {book.description}
        </Typography>
        <Typography className={classes.author} color="textPrimary" gutterBottom variant="h6" component="h6">
          <span style={{ fontWeight: 'bold'}}>AUTHOR:</span> {book.author}
        </Typography>
        <Typography className={classes.author} color="textPrimary" gutterBottom variant="h6" component="h6">
        <span style={{ fontWeight: 'bold'}}>PUBLISHER:</span> {book.publisher}
        </Typography>
      </CardContent>
    
      <CardActions className={classes.links}>
        {book.buy_links.map((link, i) => (
          <Button 
            className={classes.btn} 
            fullWidth 
            size="small" 
            color="primary" 
            key={i}
            href={link.url} 
          >
            {link.name}
        </Button>
        ))}
      </CardActions>
    </Wrapper>
  );
}
 
export default BookCard;