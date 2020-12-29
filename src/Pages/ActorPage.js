import { useState } from 'react';
import ActorModel from '../model/ActorModel';
import ActorCard from '../components/ActorCard/ActorCard'
import { Container, Row, Col, InputGroup, FormControl, Form } from 'react-bootstrap';


function ActorPage() {

    let ActorsArray = [new ActorModel("Anya", "Taylor-Joy", "1992-04-16", "https://m.media-amazon.com/images/M/MV5BYWUxMzhlM2QtNDM5MS00OThlLTlhZDEtMDhlNTliZDIzZGQ1XkEyXkFqcGdeQXVyNzcyNzc0NzE@._V1_UY317_CR19,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm5896355/?ref_=tt_cl_t1"),
    new ActorModel("Russell", "Crowe", "1964-07-04", "https://m.media-amazon.com/images/M/MV5BMTQyMTExNTMxOF5BMl5BanBnXkFtZTcwNDg1NzkzNw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000128/?ref_=nv_sr_srsg_0"),
    new ActorModel("Brad", "Pitt", "1963-12-18", "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000093/?ref_=nv_sr_srsg_0"),
    ];

    const [ActorsData, setActorsData] = useState(ActorsArray);

    let ActorCardsarr = ActorsData.map(actor => <ActorCard actor={actor} />);
    let temp_actor_arr = [];

    function UpdateActors(e) {
        let actor_name = e.target.value;
        

        ActorsArray.forEach(myFunction);

        function myFunction(item) {
            if (item.first_name.toLowerCase().includes(actor_name.toLowerCase())) {
                temp_actor_arr.push(item);
            }

        }

        setActorsData(temp_actor_arr);
    }

    function compareFirst() {
        var checkBox = document.getElementById("first");
        if (checkBox.checked === true) {
            ActorsArray.sort(function (a, b) {
                var x = a.first_name.toLowerCase();
                var y = b.first_name.toLowerCase();
                if (x < y) { return -1; }
                if (x > y) { return 1; }
                return 0;
            });
            ActorsArray.forEach(item => temp_actor_arr.push(item));         
            setActorsData(temp_actor_arr);
        }
    }
    function compareLast() {
        var checkBox = document.getElementById("last");
        if (checkBox.checked === true) {
            ActorsArray.sort(function (a, b) {
                var x = a.last_name.toLowerCase();
                var y = b.last_name.toLowerCase();
                if (x < y) { return -1; }
                if (x > y) { return 1; }
                return 0;
            });
            ActorsArray.forEach(item => temp_actor_arr.push(item));         
            setActorsData(temp_actor_arr);
        }
    }

    function compareAge() {
        var checkBox = document.getElementById("age");
        if (checkBox.checked === true) {
            ActorsArray.sort(function (a, b) { return a.calculateAge() - b.calculateAge() });
            ActorsArray.forEach(item => temp_actor_arr.push(item));         
            setActorsData(temp_actor_arr);
        }
    }

    return (
        <Container>
            <Row>
                <InputGroup size="sm" className="mb-3" onChange={UpdateActors}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Filter Actor</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                <Col>
                    <Form.Group controlId="formBasicCheckboxFirst">
                        <Form.Check id="first" type="checkbox" label="Sort First Name" onChange={compareFirst} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicCheckboxLast">
                        <Form.Check id="last" type="checkbox" label="Sort Last Name" onChange={compareLast} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicCheckboxAge">
                        <Form.Check id="age" type="checkbox" label="Sort Age" onChange={compareAge} />
                    </Form.Group>
                </Col>
            </Row>
            <br />

            <Row>
                {ActorCardsarr}
            </Row>
        </Container>
    );
}

export default ActorPage;