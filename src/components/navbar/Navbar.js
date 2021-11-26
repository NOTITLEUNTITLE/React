import "./Navbar.css";
import { FiGitlab } from "react-icons/fi";


const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        {/* <a href="#">가나다라</a>
        <a href="#">마바사</a>
        <a className="active_link" href="#">오잉?</a> */}
      </div>
      <div className="navbar__right">
      <i>
        <a href="https://yeardream-gitlab.elice.io/yeardream-project" target="_blank" rel="noreferrer"><FiGitlab size="24" /></a>
      </i>
      </div>
    </nav>
  );
};

export default Navbar;
