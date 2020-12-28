import './ActorCard.css';
import {Card, Button, Col} from 'react-bootstrap';

function ActorCard(props) {
    const { actor } = props;

    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={actor.image_link} />
                <Card.Body>
                    <Card.Title>{actor.first_name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ActorCard;