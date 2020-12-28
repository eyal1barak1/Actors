import './ActorCard.css';
import { Card, Button, Col } from 'react-bootstrap';

function ActorCard(props) {
    const { actor } = props;

    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={actor.image_link} />
                <Card.Body>
                    <Card.Title>{actor.first_name} {actor.last_name}</Card.Title>
                    <Card.Text>{actor.calculateAge()}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ActorCard;