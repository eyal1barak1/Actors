import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ActorModel from '../model/ActorModel';
import ActorCard from '../components/ActorCard/ActorCard'
import { Container, Row } from 'react-bootstrap';


function ActorPage() {



    const [ActorsData, setActorsData] = useState([new ActorModel("Anya", "Taylor-Joy", "1992-04-16", "https://m.media-amazon.com/images/M/MV5BYWUxMzhlM2QtNDM5MS00OThlLTlhZDEtMDhlNTliZDIzZGQ1XkEyXkFqcGdeQXVyNzcyNzc0NzE@._V1_UY317_CR19,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm5896355/?ref_=tt_cl_t1"),
    new ActorModel("Brad", "Pitt", "1963-12-18", "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000093/?ref_=nv_sr_srsg_0"),
    new ActorModel("Russell", "Crowe", "1964-07-04", "https://m.media-amazon.com/images/M/MV5BMTQyMTExNTMxOF5BMl5BanBnXkFtZTcwNDg1NzkzNw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000128/?ref_=nv_sr_srsg_0"),
    ]);


    const ActorCardsarr = ActorsData.map(actor => <ActorCard actor={actor} />);

    return (
        <Container>
            <Row>
                {ActorCardsarr}
            </Row>
        </Container>
    );
}

export default ActorPage;