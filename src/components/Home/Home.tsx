import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import bjj from '../../images/BJJ.png'
import sherdog from '../../images/Sherdog.png'
import pictureCard from '../../images/pictureCard.jpg'
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
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pictureCard} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the cards content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
