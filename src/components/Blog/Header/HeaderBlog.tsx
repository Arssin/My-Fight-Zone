import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import avatar1 from '../../../images/avatar1.jpg'
import avatar2 from '../../../images/duckavatar.jpg'
import './HeaderBlog.scss'

export function HeaderBlog() {
    return (
        <div className="cards">
            <p className="title">Redactors Team</p>
            <Card className="writerOne">
                <Image src={avatar1} fluid roundedCircle className="picture" />
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p className="name">Doggo</p>
                        <p className="description">*Wag his tail*</p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title"> Woof Woof 🦴</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card className="writerTwo">
                <Card.Body className="duckBody">
                    <blockquote className="blockquote mb-0">
                        <p className="name">Ninja Duck</p>
                        <p className="description">Peace was never an option</p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">
                                {' '}
                                It is Better to be a ninja than a duck, unless
                                you can be a duck ninja. Then the choice is
                                simple.
                            </cite>
                        </footer>
                    </blockquote>
                </Card.Body>
                <Image
                    src={avatar2}
                    fluid
                    roundedCircle
                    className="picture duck"
                />
            </Card>
            <div className="line" />
        </div>
    )
}
