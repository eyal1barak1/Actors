 
import { useEffect, useState } from 'react';
import MovieModel from '../model/MovieModel';
import MovieCard from '../components/MovieCard/MovieCard'
import { Container, Row, Col, InputGroup, FormControl, Form } from 'react-bootstrap';
import axios from 'axios';


function MoviePage() {

    const [MoviesData, setMoviesData] = useState([]);

    useEffect(() => {
        
        axios.get("movies.json").then(res=>{
            setMoviesData(res.data.map(single_movie => new MovieModel(single_movie)));
        });
    }, []);

    let MovieCardsarr = MoviesData.map(movie => <MovieCard movie={movie} />);

    return (
        <Container>
            
                {MovieCardsarr}
           
        </Container>
    );
}

export default MoviePage;