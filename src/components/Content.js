import { contents } from "../dataSource"
import "../assets/styles/content.css";

const Content = () =>{
    const contentBlks = contents.map((el,i)=>
        <div className={el.contentClass} key={"contentblk"+i}>
            <div className="content-blk1 flexblk">
                <div className="left">
                    <h2>{el.blk1_h2}</h2>
                    <p>{el.blk1_p}</p>
                </div>
                <div className="right">
                    <img src={el.blk1_img} alt=""/>
                </div>
            </div>
            <div className="content-blk2 flexblk">
                <div className="tiles">
                    <div className="left">
                        <img src={el.blk2_1_img} alt=""/>
                    </div>
                    <div className="right">
                        <h2>{el.blk2_1_h2}</h2>
                        <p>{el.blk2_1_p}</p>
                    </div>
                </div>
                <div className="tiles">
                    <div className="left">
                        <img src={el.blk2_2_img} alt=""/>
                    </div>
                    <div className="right">
                        <h2>{el.blk2_2_h2}</h2>
                        <p>{el.blk2_2_p}</p>
                    </div>
                </div>
                <div className="tiles">
                    <div className="left">
                        <img src={el.blk2_3_img} alt=""/>
                    </div>
                    <div className="right">
                        <h2>{el.blk2_3_h2}</h2>
                        <p>{el.blk2_3_p}</p>
                    </div>
                </div>
                <div className="tiles">
                    <div className="left">
                        <img src={el.blk2_4_img} alt=""/>
                    </div>
                    <div className="right">
                        <h2>{el.blk2_4_h2}</h2>
                        <p>{el.blk2_4_p}</p>
                    </div>
                </div>
            </div>
            <div className="content-blk3">
                <div className="sub-content">{el.blk3_div}</div>
                <div className="profile">
                    <div className="left">
                        <img src={el.blk3_img1} alt="*" />
                        <div className="profile-content">
                            <h4>{el.blk3_h4}</h4>
                            <p>{el.blk3_p}</p>
                        </div>
                    </div>
                    <div className="right">
                        <img src={el.blk3_img2} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <>
            {contentBlks}
            <div className="content-footer g_margin">
                <h3>Storybook is quick to install and it’s easy to get started.</h3>
                <a href="#/">
                    <button className="btn btn-primary trans">Go to the docs</button>
                </a>
            </div>
        </>
    )
}

export default Content;