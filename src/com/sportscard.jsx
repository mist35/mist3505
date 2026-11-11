import { Link } from "react-router-dom"
import './style/sportscard.css'
export default function Sportscard({cardimg, title}){
    return(
        <div className="sportscard">
            <img src={cardimg} alt="" />
            <div className="cardtext">
            <h2>{title}</h2>
            <h3><Link to="">{title} 쇼핑하기</Link></h3>
            <h3><Link to="">{title} 알아보기</Link></h3>
            </div>
        </div>
    )
}