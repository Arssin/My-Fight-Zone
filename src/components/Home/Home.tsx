import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { MainText } from './MainText/MainText'
import { Carousels } from './Carousel/Carousel'
import pictureCard3 from '../../images/pictureCard3.jpg'
import pictureCard from '../../images/pictureCard.jpg'
import pictureCard4 from '../../images/pictureCard4.jpg'
import pictureCard6 from '../../images/pictureCard6.jpg'

import './Home.scss'

export function Home() {
    return (
        <div className="main-container">
            <div className="container">
                <Carousels />
                <MainText />
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={pictureCard3} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={pictureCard} />
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
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
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
        </div>
    )
}
