import "./Sidebar.css";
import { IoIosHome } from "react-icons/io";
import { Link } from 'react-router-dom';


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            <h1>지피지기</h1>
          </div>
          <i
            onClick={() => closeSidebar()}
            className="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          ></i>
        </div>

        <div className="sidebar__menu">
          <div className="sidebar__link active_menu_link">
            <i><IoIosHome size="24" color="red" /></i>
            <Link to="/">Home</Link>
          </div>
          <h2>Category</h2>
          <div className="sidebar__link">
            <i className="fa fa-user-secret" aria-hidden="true"></i>
            <Link to="/living">생활</Link>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-building-o"></i>
            <Link to="/metro">교통</Link>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-wrench"></i>
            <Link to="/culture">문화</Link>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-archive"></i>
            <Link to="/consum">소비</Link>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-archive"></i>
            <Link to="/apex">apex</Link>
          </div>
        </div>
        
    </div>
  );
};

export default Sidebar;
