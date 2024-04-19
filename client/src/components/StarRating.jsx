import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import icons
import './StarRating.css';

const StarRating = () => {
  const [selectedStar, setSelectedStar] = useState(0);

  const handleStarClick = (index) => {
    setSelectedStar(index);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= selectedStar ? "star selected" : "star"}
            onClick={() => handleStarClick(index)}
          >
            {index <= selectedStar ? <FaStar /> : <FaRegStar />} {/* Use filled star if selected, regular star otherwise */}
          </button>
        );
      })}
      <p>{selectedStar * 20}%</p>
    </div>
  );
};

export default StarRating;