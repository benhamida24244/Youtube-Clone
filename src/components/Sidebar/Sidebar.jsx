import React from 'react';
import HomeIcon from '../../assets/Home.png';
import GamingIcon from '../../assets/Gaming-icon.png';
import CareIcon from '../../assets/Car-icon.png';
import SportIcon from '../../assets/Sport-icon.png';
import TvIcon from '../../assets/Tv-icon.png';
import MusicIcon from '../../assets/Music-icon.png';
import BlogsIcon from '../../assets/Blogs-icon.png';
import NewsIcon from '../../assets/News-icon.png';
import PewDiePie from '../../assets/PewDiePie.png';
import MrBeast from '../../assets/MrBeast.png';
import JustinBieber from '../../assets/JustinBieber.png';
import MinuteCrafts from '../../assets/5-MinuteCrafts.png';
import './Sidebar.css';

function Sidebar({ sidebar, selectedCategory, setSelectedCategory }) {
  const categories = [
    { name: 'Home', icon: HomeIcon },
    { name: 'Gaming', icon: GamingIcon },
    { name: 'Care', icon: CareIcon },
    { name: 'Sport', icon: SportIcon },
    { name: 'TV', icon: TvIcon },
    { name: 'Music', icon: MusicIcon },
    { name: 'Blogs', icon: BlogsIcon },
    { name: 'News', icon: NewsIcon },
  ];

  return (
    <>
      <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
        <div className="shortcut-links">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`side-link ${selectedCategory === category.name ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <img src={category.icon} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
        <div className="subscribers">
          <h3>Subscribers</h3>
          <div className="subscribe-link">
            <img src={PewDiePie} alt="PewDiePie" />
            <p>PewDiePie</p>
          </div>
          <div className="subscribe-link">
            <img src={MrBeast} alt="MrBeast" />
            <p>MrBeast</p>
          </div>
          <div className="subscribe-link">
            <img src={JustinBieber} alt="JustinBieber" />
            <p>JustinBieber</p>
          </div>
          <div className="subscribe-link">
            <img src={MinuteCrafts} alt="5-MinuteCrafts" />
            <p>5-MinuteCrafts</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
