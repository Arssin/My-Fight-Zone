import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import bjj from '../../images/BJJ.png'
import sherdog from '../../images/Sherdog.png'
import pictureCard3 from '../../images/pictureCard3.jpg'
import pictureCard1 from '../../images/pictureCard1.jpg'
import pictureCard4 from '../../images/pictureCard4.jpg'
import pictureCard6 from '../../images/pictureCard6.jpg'
import wrestling from '../../images/Wrestling.jpg'
import './Home.scss'

export function Home() {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex)
    }

    return (
        <div className="main-container">
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                className="carousel-container"
            >
                <Carousel.Item className="carouselItem">
                    <img className="picture" src={bjj} alt="First slide" />
                    <div className="shadow" />
                    <Carousel.Caption>
                        <h3 className="title">Felipe Pena suspended!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                    <img
                        className="picture"
                        src={wrestling}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="title">Time for wrestling!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                    <img className="picture" src={sherdog} alt="Third slide" />

                    <Carousel.Caption>
                        <h3 className="title">Check MMA records on sherdog!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div> mAIN</div>

            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={pictureCard3} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={pictureCard1} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural
                            lead-in to additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={pictureCard4} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={pictureCard6} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural
                            lead-in to additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    )
}
