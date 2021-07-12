import { parseDate } from "../utils/helpers";
import { Typography } from "@material-ui/core";
import { Wrapper, StyledPaper, Content, StyledButton, useStyles } from './styles/MovieCard.styles';


const MovieCard = ({ movie }) => {
  const classes = useStyles();

  return (  
    <Wrapper elevation={5} className={classes.card}>
      <StyledPaper elevation={3}>
        <img 
          src={movie.multimedia?.src 
            ?  movie.multimedia.src 
            : 'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'  
            } 
          alt="movie-img" 
        />
      </StyledPaper>
      
      <Content className={classes.content}>
        <Typography className={classes.title} variant="h5" component="h5">{movie.display_title}</Typography>
        <Typography className={classes.text} gutterBottom variant="subtitle2" component="p" color="textSecondary">
          by {movie.byline} - {parseDate(movie.date_updated).date}
        </Typography>
        <Typography className={classes.text} gutterBottom variant="body1" component="p" color="textPrimary">
          {movie.headline}. <a href={movie.link.url} className="link">{movie.link.suggested_link_text}</a>
        </Typography>

        <StyledButton 
          className={classes.btn} 
          size="small" 
          color="primary" 
          href={movie.link.url} 
          variant="contained"
        >
          Full Review
        </StyledButton>
      </Content>
    </Wrapper>
  );
}
 
export default MovieCard;