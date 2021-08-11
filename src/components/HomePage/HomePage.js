import "./HomePage.css";
import { Carousel } from 'react-bootstrap';
import whitetextbg from "../images/whitetextbg.png";
import whitetextbg2 from "../images/whitetextbg2.png";
import whitetextbg3 from "../images/whitetextbg3.png";
import whitetextbg4 from "../images/whitetextbg4.png";
import whitetextbg5 from "../images/whitetextbg5.png";



const HomePage = props => {
    return (
        <div className="homepage">
            <div>
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>I AM</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel>

                                <Carousel.Item interval="500">
                                    <img
                                        className="d-block w-100"
                                        src={whitetextbg}
                                        alt="First slide"
                                        height="300"
                                    />

                                </Carousel.Item>

                                <Carousel.Item interval="500">
                                    <img
                                        className="d-block w-100"
                                        src={whitetextbg2}
                                        alt="Second slide"
                                        height="300"
                                    />

                                </Carousel.Item>

                                <Carousel.Item interval="500">
                                    <img
                                        className="d-block w-100"
                                        src={whitetextbg3}
                                        alt="Third slide"
                                        height="300"
                                    />

                                </Carousel.Item>

                                <Carousel.Item interval="500">
                                    <img
                                        className="d-block w-100"
                                        src={whitetextbg4}
                                        alt="Third slide"
                                        height="300"
                                    />

                                </Carousel.Item>

                                <Carousel.Item interval="500">
                                    <img
                                        className="d-block w-100"
                                        src={whitetextbg5}
                                        alt="Third slide"
                                        height="300"
                                    />

                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;