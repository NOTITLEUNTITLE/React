import React from 'react'
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <>
        <div className="sidebar">
            <div className="sidebar_logo">
              <i className="fas fa-horse"></i>
              <Link to="/">지피지기</Link>
            </div>
            
            <div className="sidebar_menu">
                <li><Link to="/living">생활</Link></li>
                <li><Link to="/metro">교통</Link></li>
                <li><Link to="/culture">문화</Link></li>
                <li><Link to="/consum">소비</Link></li>
            </div>
        </div>
    </>
  )
}

export default Sidebar
