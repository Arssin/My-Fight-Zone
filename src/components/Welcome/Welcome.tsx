import { Link } from 'react-router-dom'
import './Welcome.scss'

export function Welcome() {
    return (
        <div className="welcome">
            <h1 className="title">Welcome</h1>
            <Link to="/home" className="goToStartbrn">
                Go to starting page
            </Link>
        </div>
    )
}
