import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from 'react-icons/bs'
import sts from '../../../../images/stslogo.png'
import './OtherSection.scss'

export function OtherSection() {
    return (
        <div className="secondSection">
            <div className="sectionDivs">
                <div>Follow us!</div>
                <div>
                    <BsLinkedin />
                    <BsGithub />
                    <BsFacebook />
                    <BsInstagram />
                </div>
            </div>
            <div className="sectionDivs">
                <a href="https://www.sts.pl/">
                    <img className="ad" src={sts} alt="bet365 logo" />
                </a>
            </div>
            <div className="sectionDivs">Champions</div>
        </div>
    )
}
