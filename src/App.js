import Home from './pages/Home';
import Header from './layout/Header';
import Footer from './layout/Footer';
import GlobalStyle from './theme/globalStyles';
import styled from 'styled-components';
import Books from './pages/Books';
import News from './pages/News';
import { Switch, Route, useLocation } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Movies from './pages/Movies';
import { AnimatePresence } from 'framer-motion';

const Container = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
          align-items: center;
  min-height: 90vh;
`;

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Container>
        <AnimatePresence exitBeforeEnter> 
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/books" component={Books} />
            <Route path="/movies" component={Movies} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
