import styles from '../../sass/components/star_rating/StarRating.module.sass';

import { useState } from "react";

import Star from './Star';

const StarRating = ({ stars }) => {
  const [starsFill, setStarsFill] = useState(0);
  const [starsChecked, setStarsChecked] = useState(0);

  const qtyStars = Array(stars ? stars : 5).fill(0);

  return (
    <div
      className = { styles.container }
      onMouseLeave = { () => setStarsFill(0) }
    >
      {
        qtyStars.map((_, index) => {
          return (
            <Star
              key = { index }
              fill = { starsFill > index || starsChecked > index ? true : false }
              value = { index + 1 }
              handleMouseOver = { setStarsFill }
              handleClick = { setStarsChecked }
            />
          );
        })
      }
      <input
        type = 'hidden'
        value = { starsChecked }
        name = 'rating'
      />
    </div>
  );
}

export default StarRating;