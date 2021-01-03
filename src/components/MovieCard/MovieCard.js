import './MovieCard.css';
import { Row, Col, Image, Form } from 'react-bootstrap';

function MovieCard(props) {
    const { movie } = props;

    return (
        <Row style={{backgroundColor: "#FFE4C4"}}>
            <Col xs={6} md={3}>
                <Image src={movie.Poster} rounded />
            </Col>
            <Col xs={6} md={6}>
                <Form.Control plaintext readOnly value={"Movie name: " + movie.Movie_name} />
                <Form.Control plaintext readOnly value={"Length in minutes: " + movie.Length_in_minutes} />
                <Form.Control plaintext readOnly value={"Director: " + movie.Director} />
                <Form.Control plaintext readOnly value={"Main stars: " + movie.Main_stars} />
            </Col>

        </Row>
    )
}

export default MovieCard;