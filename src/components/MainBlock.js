import ContentLinks from "./ContentLinks";
import { mainLogos } from "../dataSource"
import "../assets/styles/mainblock.css";

const MainBlock = () =>{
    const logos = mainLogos.map((el,i)=>
        <div className="mainblk-2-wrapper" key={el.name+i}>
            <img src={el.imgPath} alt={el.name}/>
        </div>
    )
    return (
        <div className="mainblk g_margin">
            <div className="mainblk-1">
                <h1 className="main-title">Build component driven UIs faster</h1>
                <div className="sub-title">
                Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.
                </div>
                <div className="actions">
                    <a href="#/">
                        <button className="btn btn-primary trans">Go to the docs</button>
                    </a>
                    <a href="#/">
                        <button className="btn btn-secondary trans">Go to the docs</button>
                    </a>
                </div>
            </div>
            <div className="mainblk-content">
                <div className="mainblk-img-container">
                    <div className="mainblk-img-wrapper">
                    <img className="mainblk-img" src="/images/img-1.png" alt="Main content Video"/>
                    </div>
                </div>
                <div className="mainblk-links">
                    <div className="mainblk-links-blk">
                        <h2>Made For</h2>
                        <ContentLinks />
                    </div>
                    <div className="mainblk-links-blk">
                        <h2>Github</h2>
                        <ul className="content-links">
                            <li>
                                <a href="#/">
                                    <span className="title">v6.3</span><br/>
                                    <span className="sub">Latest Version</span>
                                </a>
                            </li>
                            <li>
                                <a href="#/">
                                    <span className="title">11.40m</span><br/>
                                    <span className="sub">Installs per Month</span>
                                </a>
                            </li>
                            <li>
                                <a href="#/">
                                    <span className="title">1290+</span><br/>
                                    <span className="sub">Contributors</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mainblk-2">
                {logos}
                {/* <div className="mainblk-2-wrapper">
                    <img src="/images/github_logo.png" alt="github"/>
                </div>
                <div className="mainblk-2-wrapper">
                    <img src="/images/dropbox_logo.png" alt="dropbox"/>
                </div>
                <div className="mainblk-2-wrapper">
                    <img src="/images/airbnb_logo.png" alt="airbnb"/>
                </div>
                <div className="mainblk-2-wrapper">
                    <img src="/images/lya_logo.png" alt="lya"/>
                </div>
                <div className="mainblk-2-wrapper">
                    <img src="/images/mozilla_logo.png" alt="mozilla"/>
                </div>
                <div className="mainblk-2-wrapper">
                    <img src="/images/jet_brains_logo.png" alt="jet brains"/>
                </div> */}
            </div>
        </div>
    )
}

export default MainBlock;