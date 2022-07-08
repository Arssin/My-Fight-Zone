import sts from '../../../../images/stslogo.png'
import './OtherSection.scss'

export function OtherSection() {
    return (
        <div className="secondSection">
            <div className="sectionDivs">
                <a href="https://www.sts.pl/">
                    <img className="ad" src={sts} alt="bet365 logo" />
                </a>
            </div>
            <div className="sectionDivs">Upcoming Fights</div>
        </div>
    )
}
