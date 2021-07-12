import { parseDate } from "../utils/helpers";
// Components
import { Button, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
// Styles
import { Wrapper, useStyles } from './styles/NewsCard.styles';


const NewsCard = ({ article }) => {
  const classes = useStyles();

  return (  
    <Wrapper elevation={5} className={classes.card}>
      <CardContent className={classes.heading}>
        <CardMedia className={classes.media} component="img" 
          src={article.multimedia?.[0]?.url ?
            `https://nytimes.com/${article.multimedia[0].url}` : 
            'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
          } 
          alt="news-img" 
        />
        <h1 className="title">{article.headline.main}</h1>
        <div className="source">
          <h4>{article.byline.original}</h4>
          <h4>{article.source}</h4>
        </div>
      </CardContent>

      <CardContent>
        <Typography className={classes.description} variant="body1" color="textPrimary" component="p">
          {article.snippet}
        </Typography>
        <Typography className={classes.date} color="textSecondary" gutterBottom variant="body2" component="p">
          {parseDate(article.pub_date).date} - {parseDate(article.pub_date).time}
        </Typography>
      </CardContent>

      <CardActions className={classes.links}>
        <Button 
          className={classes.btn} 
          fullWidth 
          size="small" 
          color="primary" 
          href={article.web_url} 
        >
          {article.source}
        </Button>
      </CardActions>
    </Wrapper>    
  );
}
 
export default NewsCard;