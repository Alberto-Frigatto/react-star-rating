import styles from '../../sass/components/star_rating/Star.module.sass';

import { Star as BsStar, StarFill as BsStarFill } from "react-bootstrap-icons";

const Star = ({ fill, value, handleMouseOver, handleClick }) => {
  return (
    <span
      onMouseOver = { () => handleMouseOver(value) }
      onClick = { () => handleClick(value) }
      className = { styles.iconContainer }
    >
      { !fill ? <BsStar/> : <BsStarFill/> }
    </span>
  );
}

export default Star;