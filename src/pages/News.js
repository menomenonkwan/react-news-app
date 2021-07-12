import { useEffect, useState } from "react";
// Components
import { Button, Divider, Grid, IconButton, InputBase, Paper } from "@material-ui/core";
import NewsCard from "../components/NewsCard";
import SearchIcon from '@material-ui/icons/Search';
import TopStoriesCard from "../components/TopStoriesCard";
import DotLoader from 'react-spinners/DotLoader';
// Styles
import { Wrapper, Titling, Controls, override, useStyles } from "./styles/News.styles";
import SmallMenu from "../components/SmallMenu";
import { containerVariants } from "../utils/helpers";

const options = [
  { name: 'Home', search: 'home'},
  { name: 'World', search: 'world'},
  { name: 'US', search: 'us'},
  { name: 'Science', search: 'science'},
  { name: 'Technology', search: 'technology'},
  { name: 'Arts', search: 'arts'},
  { name: 'Sports', search: 'sports'},
];

const News = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  const [topic, setTopic] = useState(`home`);
  const [topStory, setTopStory] = useState(true);

  useEffect(() => {
   
    const getArticles = async () => {
      setIsLoading(true);
      setTopStory(true);
      const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
      const data = await response.json();
    
      setArticles(data.results);
      setIsLoading(false);
    }

    getArticles();
  }, [topic]);

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const submitQuery = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setTopStory(false);
    const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
    const data = await response.json();
    setArticles(data.response.docs);
    setIsLoading(false);
    setSearch('');
  }

  return (  
    <Wrapper 
      key="news"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Divider />
      <Controls>
        {options?.map((option, i) => (
          <Button variant="contained" onClick={() => setTopic(`${option.search}`)} key={i}>{option.name}</Button>
        ))}
      </Controls>    
      <SmallMenu setTopic={setTopic} options={options}/>
      
      <Titling>
        {topStory ? <h3>Top Stories</h3> : <h3>Search Results</h3> }
      </Titling>

      <Paper component="form" className={classes.root} onSubmit={submitQuery}>
        <InputBase
          className={classes.input}
          placeholder="Search Articles"
          inputProps={{ 'aria-label': 'search articles' }}
          value={search}
          onChange={handleSearch}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      {isLoading ? <DotLoader color="var(--loading, cornflowerblue)" loading={isLoading} css={override} size={150} /> : 
      <Grid container spacing={10}>
        {articles.map((article, i) => (
          <Grid 
            item 
            key={i}
            xs={12} 
            md={6} 
          >
            {topStory ? 
            <TopStoriesCard article={article} />
            :
            <NewsCard article={article}/>
            }
          </Grid> 
        ))}
      </Grid>
      }
    </Wrapper>

  );
}
 
export default News;