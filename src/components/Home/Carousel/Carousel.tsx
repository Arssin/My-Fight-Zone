import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'
import wrestling from '../../../images/Wrestling.jpg'
import bjj from '../../../images/BJJ.png'
import sherdog from '../../../images/Sherdog.png'
import './Carousel.scss'

export function Carousels() {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex)
    }

    return (
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
                <img className="picture" src={wrestling} alt="Second slide" />

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
    )
}
