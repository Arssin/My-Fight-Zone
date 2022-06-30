import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import pictureCard3 from '../../../images/pictureCard3.jpg'
import pictureCard from '../../../images/pictureCard.jpg'
import pictureCard4 from '../../../images/pictureCard4.jpg'
import pictureCard6 from '../../../images/pictureCard6.jpg'
import './Cards.scss'

export function Cards() {
    return (
        <div className="card-container">
            <CardGroup className="card-group-one">
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
            <CardGroup className="card-group-two">
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
