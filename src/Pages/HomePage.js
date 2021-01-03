import { Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";


const HomePage = () => 
    <>
        <Jumbotron>
            <h1>Movies App</h1>
            <p>Amazing movie app!! :)</p>
            <p>
                <Button variant="primary" href="#/movies">Enter</Button>
                {/* <Link to="/cars">Enter</Link> */}
            </p>
        </Jumbotron>
    </>

export default HomePage;