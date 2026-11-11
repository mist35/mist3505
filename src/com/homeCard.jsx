import {Link} from "react-router-dom"

import "./style/homeCard.css"
export default function HomeCard({key, imgSrc, imgAlt, title, link, linkText, position}){

   const style={
    alignItems: position
   }

    return(
        <div className="homeCard">
            <img src={imgSrc} alt={imgAlt} />
            <div style={style} className="text">
                <h3>{title}</h3>
                <div><Link to={link}>{linkText}</Link></div>
            </div>
        </div>
    )
}