import { MainText } from './MainText/MainText'
import { Carousels } from './Carousel/Carousel'
import { Cards } from './Cards/Cards'

import './Home.scss'

export function Home() {
    return (
        <div className="main-container">
            <div className="container">
                <Carousels />
                <MainText />
                <Cards />
            </div>
        </div>
    )
}
