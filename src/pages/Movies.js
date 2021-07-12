import { useState, useEffect } from "react";
// Components
import DotLoader from 'react-spinners/DotLoader';
import { Divider, IconButton, InputBase, Paper } from "@material-ui/core";
import MovieCard from "../components/MovieCard";
import SearchIcon from '@material-ui/icons/Search';
// Styles
import { Wrapper, Titling, override, useStyles } from './styles/Movies.styles';
import { containerVariants } from "../utils/helpers";


const Movies = () => {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      const response = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
      const data = await response.json();

      setMovies(data.results);
      setIsLoading(false);
    }
    getMovies();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const submitQuery = (e) => {
    e.preventDefault();

    const searchMovies = async () => {
      setIsLoading(true);

      const response = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${search}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
      const data = await response.json();

      setMovies(data.results);
      setIsLoading(false);
      setSearch('');
    }
    searchMovies();
  }

  return ( 
    <Wrapper 
      key="movies"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Divider />
      <Titling>
        <h3>Movie Reviews</h3>
      </Titling>

      <Paper component="form" className={classes.root} onSubmit={submitQuery}>
        <InputBase
          className={classes.input}
          placeholder="Search Movie Reviews"
          inputProps={{ 'aria-label': 'search movie reviews' }}
          value={search}
          onChange={handleSearch}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      {isLoading && <DotLoader color="var(--loading, cornflowerblue)" loading={isLoading} css={override} size={150} /> }
      {!movies && <div><h1>No Movies Reviews found. Sorry, buddy.</h1></div>
      }
      {movies && movies.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </Wrapper>
  );
}
 
export default Movies;