import "../assets/styles/footer.css";


const Footer = () =>{
    return (
        <div className="footer-wrapper">
            <div className="upper-cloumn">
                <div className="left">
                    <img src="/images/documentation_logo.png" alt="" />
                    <div className="details">
                        <h4>Documentation</h4>
                        <p>Add Storybook to your project in less than a minute to build components faster and easier.</p>
                        <p>
                            <a href="#/">React &gt;</a>
                            <a href="#/">Vue &gt;</a>
                            <a href="#/">Angular &gt;</a>
                            <a href="#/">Web Components &gt;</a>
                        </p>
                    </div>
                </div>
                <div className="right">
                    <img src="/images/tutorials_logo.png" alt="" />
                    <div className="details">
                        <h4>Tutorials</h4>
                        <p>Learn Storybook with in-depth tutorials that teaches Storybook best practices. Follow along with code samples.</p>
                        <p>
                            <a href="#/">Learn Storybook now &gt;</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="lower-column"></div>
            <div className="services g_margin">
                <div className="item">
                    <h4>Maintained by</h4>
                    <img src="/images/chromatic_logo.png"  alt="Chromatic"/>
                </div>
                <div className="item">
                    <h4>Continuous integration by</h4>
                    <img src="/images/circleci_logo.png"  alt="Circleci"/>
                </div>
                <div className="item">
                    <h4>Hosting by</h4>
                    <img src="/images/netlify_logo.png"  alt="Netlify"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;