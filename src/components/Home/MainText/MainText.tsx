import Card from 'react-bootstrap/Card'
import { Clock } from '../Clock/Clock'
import './MainText.scss'

export function MainText() {
    return (
        <div className="mainCard">
            <Card bg="secondary" text="light">
                <Card.Header>Hello in My Fight Zone!</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
                        sed diam nonumy eirmod tempor incididunt, consectetur
                        adipiscing elit, sed diam nonumy eirmod tempor
                        incididunt, sed diam nonumy eirmod tempor inc , nonumy
                        eirmod tempor incididunt, sed diam nonumy eirmod tempor
                        inc, nonumy. Lorem ipsum dolor sit, sed diam nonum, sed
                        diam nonumy eirmod tempor inc, nonumy e
                    </Card.Text>
                </Card.Body>
            </Card>
            <Clock />
        </div>
    )
}
