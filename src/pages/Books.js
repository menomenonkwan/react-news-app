import { useState, useEffect } from 'react';
import { containerVariants, getDate } from '../utils/helpers';
// Components
import DotLoader from 'react-spinners/DotLoader';
import { Button, Divider, Grid, IconButton, InputBase, MenuItem, Paper, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import BookCard from '../components/BookCard';
import SmallMenu from '../components/SmallMenu';
import BookSearchCard from '../components/BookSearchCard';
// Styles
import { Wrapper, Controls, Titling, override, Search, useStyles } from './styles/Book.styles';

const parameters = [
  { value: 'author', label: 'Author' },
  { value: 'title', label: 'Title' },
  { value: 'isbn', label: 'isbn' },
];

const options = [
  { name: 'Fiction', search: 'hardcover-fiction'},
  { name: 'NonFiction', search: 'hardcover-nonfiction'},
  { name: 'Young Adult', search: 'young-adult-hardcover'},
];

const Test = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState(null);
  const [genre, setGenre] = useState('hardcover-fiction');
  const [search, setSearch] = useState('');
  const [parameter, setParameter] = useState('');
  const [queryResult, setQueryResult] = useState(null);

  useEffect(() => {
    
    const getBooks = async () => {
      setIsLoading(true);

      const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${genre}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
      const data = await response.json();

      setBooks(data.results);
      setIsLoading(false);
    }

    getBooks();
  }, [genre]);

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const submitQuery = async (e) => {
    e.preventDefault();
    if(search === '' || parameter === '') { console.log('nope'); return }
    setIsLoading(true);
    setBooks(null);
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?${parameter}=${search}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
    const data = await response.json();

    setQueryResult(data.results);
    setIsLoading(false);
    setSearch('');
  }

  const handleChange = (event) => {
    setParameter(event.target.value);
  };

  return (  
    <Wrapper 
      key="books"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Divider />
      <Controls>
        {options?.map((option, i) => (
          <Button variant="contained" onClick={() => setGenre(`${option.search}`)} key={i}>{option.name}</Button>
        ))}
      </Controls>
      <SmallMenu 
      setTopic={setGenre} 
      options={options}/>

      <Titling>
        <h3>{books?.display_name} Best Sellers</h3>
        {books ? <h3>{getDate(books.bestsellers_date)}</h3> : null}        
      </Titling>

      <Search>
        <TextField
        className={classes.search}
          id="outlined-select-book"
          select
          label="Select"
          value={parameter}
          onChange={handleChange}
          variant="outlined"
        >
          {parameters.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Paper component="form" className={classes.root} onSubmit={submitQuery}>
          <InputBase
            className={classes.input}
            placeholder={parameter ? `Search ${parameter}` : null}
            // placeholder="Search Reviews"
            inputProps={{ 'aria-label': 'search articles' }}
            value={search}
            onChange={handleSearch}
            disabled={parameter ? false : true }
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Search>

      {isLoading ? <DotLoader color="var(--loading, cornflowerblue)" loading={isLoading} css={override} size={150} /> :
      <>
        <Grid container spacing={5}>
          {books?.books.map(book => (
            <Grid 
              item 
              key={book.rank}
              xs={12} 
              md={4} 
              lg={3}
            >
              <BookCard book={book} />
            </Grid>
          ))}
        </Grid>
        </>
      }

      {queryResult && <Grid container spacing={5}>
          {queryResult?.map((result, i) => (
            <Grid 
              item 
              key={i}
              xs={12} 
              md={4} 
              lg={3}
            >
              <BookSearchCard result={result} />
            </Grid>
          ))}
        </Grid>
      }
    </Wrapper>
  );
}


export default Test;