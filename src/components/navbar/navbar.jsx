import React from 'react';
import './navbar.css';
import menuIcon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import upload_icon from '../../assets/upload-icon.png';
import Custom_icon from '../../assets/Custom-icon.png';
import alert_icon from '../../assets/alert-icon.png';
import profile_icon from '../../assets/profile-icon.png';
import { Link } from 'react-router-dom';

function Navbar({ setsidebar }) {
  const toggleSidebar = () => {
    setsidebar(prevState => !prevState);
  };

  return (
    <nav className='flex-dev'>
      <div className="nav-left flex-dev">
        <img src={menuIcon} alt="menu icon" id='menu-icon' onClick={toggleSidebar} />
        <Link to="/">
          <img src={logo} alt="Company logo" className="logo" />
        </Link>
      </div>
      <div className="nav-middle flex-dev">
        <input type="text" placeholder='Search' aria-label="Search" />
        <img src={search} alt="Search icon" />
      </div>
      <div className="nav-right flex-dev">
        <img src={upload_icon} alt="Upload icon" id='right-icon' />
        <img src={Custom_icon} alt="Custom icon" id='right-icon' />
        <img src={alert_icon} alt="Alert icon" id='right-icon' />
        <img src={profile_icon} alt="Profile icon" style={{ borderRadius: '50%', width: '45px' }} />
      </div>
    </nav>
  );
}

export default Navbar;
