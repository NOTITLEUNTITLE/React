import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar_logo">
                <i className="fas fa-horse"></i>
                <Link to="/">지피지기</Link>
                </div>
                <div className="navbar_menu">
                <li><Link to="/living">생활</Link></li>
                <li><Link to="/metro">교통</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/culture">문화</Link></li>
                <li><Link to="/consum">소비</Link></li>
                
                </div>
                
                <div className="navbar_icons">
                <select className="navbar_icons_options">
                    <option>국내</option>
                    <option>세계</option>
                </select>
                <li><a href="https://yeardream-gitlab.elice.io/yeardream-project/project-4" className="fab fa-gitlab"></a></li>
                <li><i className="fas fa-bomb"></i></li>
                </div>

                <a href="#" className="navbar_toggleBtn">
                <i className="fas fa-bars"></i>
                </a>
            </div>
        </>
    )
}

export default Header
