import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from 'react-icons/bs'
import { DataFetching } from '../../../../data/ufcranking'
import sts from '../../../../images/stslogo.png'
import githublogo from '../../../../images/githublogo.png'
import './OtherSection.scss'

export function OtherSection() {
    return (
        <div className="secondSection">
            <div className="sectionDivs">
                <p className="text">Follow us!</p>
                <div className="iconsdiv">
                    <a
                        href="https://www.linkedin.com/in/mateusz-bini%C4%99da-818141209/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsLinkedin className="icons" />
                    </a>
                    <a
                        href="https://github.com/Arssin"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsGithub className="icons" />
                    </a>
                    <a
                        href="https://www.facebook.com/mateusz.binieda.14/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {' '}
                        <BsFacebook className="icons" />
                    </a>

                    <a
                        href="https://www.instagram.com/songo_bjj/?hl=pl"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsInstagram className="icons" />
                    </a>
                </div>
            </div>
            <div className="sectionDivs">
                <p className="text">Ads</p>
                <a href="https://www.sts.pl/" target="_blank" rel="noreferrer">
                    <img className="ad" src={sts} alt="sts logo" />
                </a>
                <a
                    href="https://github.com/Arssin"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="ad" src={githublogo} alt="github logo" />
                </a>
            </div>
            <div className="sectionDivs">
                <p> Current UFC Champions</p>
                <DataFetching />
            </div>
        </div>
    )
}
