import React, { useState } from 'react';
import './Home.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';

function Home({ sidebar }) {
  const [selectedCategory, setSelectedCategory] = useState('Home');

  return (
    <>
      <Sidebar
        sidebar={sidebar}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className={`container ${sidebar ? '' : 'large-container'}`}>
        <Feed category={selectedCategory} />
      </div>
    </>
  );
}

export default Home;
