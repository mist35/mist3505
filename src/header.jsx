import React from "react";
import { Link } from "react-router-dom";

import Logo from "./assets/logowhite.png";
import heartIcon from "./assets/heartwhite.png";
import cartIcon from "./assets/bagwhite.png";

import "./css/header.css"; 
function Header() {
    return (
        <header>
            <div className="header_top">
                {/* ul>li*4>Link */}
                <ul>
                    <li><Link to="/pages/country" >언어</Link>|</li>
                    <li><Link to="./pages/store" >매장찾기</Link>|</li>
                    <li><Link to="./pages/join" >회원가입</Link>|</li>
                    <li><Link to="./pages/login" >로그인</Link></li>
                </ul>
            </div>
            <div className="header_bottom">
                <h1><Link to="./"><img src={Logo} alt="Logo" /></Link></h1>
                <ul className="gnb">
                    <li><Link to="./pages/new" >New</Link>|</li>
                    <li><Link to="./pages/sports" >스포츠</Link>|</li>
                    <li><Link to="./pages/men" >남성</Link>|</li>
                    <li><Link to="./pages/women" >여성</Link>|</li>
                    <li><Link to="./pages/shoes" >신발</Link>|</li>
                    <li><Link to="./pages/acc" >액세서리</Link>|</li>
                    <li><Link to="./pages/seasonoff" >시즌오프</Link></li>
                </ul>
                <ul className="util">
                    <li><Link to="./pages/wishlist"><img src={heartIcon} alt="Heart" /></Link></li>
                    <li><Link to="./pages/cart"><img src={cartIcon} alt="Cart" /></Link></li>
                </ul>
            </div>
        </header>
    )
}
export default Header