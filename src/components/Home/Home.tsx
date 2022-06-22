import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import bjj from '../../images/BJJ.png'
import sherdog from '../../images/Sherdog.png'
import wrestling from '../../images/Wrestling.jpg'
import './Home.scss'

export function Home() {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex)
    }

    return (
        <div>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                className="carousel-container"
            >
                <Carousel.Item className="carouselItem">
                    <img className="picture" src={bjj} alt="First slide" />
                    <div className="shadow" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                    <img
                        className="picture"
                        src={wrestling}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                    <img className="picture" src={sherdog} alt="Third slide" />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>Newsy</div>
        </div>
    )
}
