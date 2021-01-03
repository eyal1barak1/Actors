import './App.css';
import ActorPage from './Pages/ActorPage';
import MoviePage from './Pages/MoviePage';
import Search from './components/SeachBox/Search'
import HomePage from './Pages/HomePage';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div >

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#/">Movies App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#Movies">Movies</Nav.Link>
            <Nav.Link href="#Actors">Actors</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/Movies"><MoviePage /></Route>
          <Route exact path="/Actors"><ActorPage /></Route>
        </Switch>
      </HashRouter>

      {/* <Search/>
      <ActorPage/>
      <MoviePage/> */}
    </div>
  );
}

export default App;
