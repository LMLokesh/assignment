
import { docsData } from "../dataSource"

const ContentLinks = () =>{

    const links = docsData.map((el, i) =>
        <li className="trans" key={el.name+i}>
            <a href="#/">
                <span>
                    <img src={el.imgPath} alt={el.name}/>
                    <span>{el.name} &gt;</span>
                </span>
            </a>
        </li>
    )
    return (
        <ul className="content-links">
            {links}
        </ul>
    )
}

export default ContentLinks;