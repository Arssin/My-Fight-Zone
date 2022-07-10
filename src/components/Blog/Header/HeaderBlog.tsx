import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import avatar1 from '../../../images/avatar1.jpg'
import './HeaderBlog.scss'

export function HeaderBlog() {
    return (
        <div className="cards">
            <Card className="writerOne">
                <Image src={avatar1} fluid roundedCircle className="picture" />
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer posuere erat a ante.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in{' '}
                            <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card className="writerTwo">
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer posuere erat a ante.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in{' '}
                            <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
                <Image src={avatar1} fluid roundedCircle className="picture" />
            </Card>
        </div>
    )
}
