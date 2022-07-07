import { CardSection } from './CardsSection/CardSection'
import { OtherSection } from './OtherSection/OtherSection'
import './Cards.scss'

export function Cards() {
    return (
        <div className="card-container">
            <CardSection />
            <OtherSection />
        </div>
    )
}
