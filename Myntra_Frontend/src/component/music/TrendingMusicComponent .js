import React, { useState } from 'react';
import style from './trendingscrollerbar.module.css';

const TrendingMusicComponent = ({ musicData }) => {
  const itemsPerRow =1 ;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(musicData.length / itemsPerRow);

  // const handleNextPage = () => {
  //   setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  // };

  const startIndex = currentPage * itemsPerRow;
  const endIndex = startIndex + itemsPerRow;

  const currentMusicItems = musicData.slice(startIndex, endIndex);
  const handlePreviousPage = () => {
    const scrollContainer = document.querySelector(`.${style.scrollable_row}`);
    if (scrollContainer) {
      scrollContainer.scrollLeft -= scrollContainer.offsetWidth;
    }
  };
  
  const handleNextPage = () => {
    const scrollContainer = document.querySelector(`.${style.scrollable_row}`);
    if (scrollContainer) {
      scrollContainer.scrollLeft += scrollContainer.offsetWidth;
    }
  };
  
  
  return (
    <div>
    <h2>Trending Music</h2>
    <div className={style.music_container}>
      <button className={`${style.scroll_button} ${style.left}`} onClick={handlePreviousPage}>
        &lt;&lt;
      </button>
      <div className={style.scrollable_row}>
        {musicData.map((musicItem, index) => (
          <div key={index} className={style.music_item}>
            <img src={musicItem.images[0]} alt={musicItem.title} />
            <p>{musicItem.title}</p>
            <p>{musicItem.artist}</p>
          </div>
        ))}
      </div>
      <button className={`${style.scroll_button} ${style.right}`} onClick={handleNextPage}>
        &gt;&gt;
      </button>
    </div>
  </div>
  
  );
};

export default TrendingMusicComponent;
