import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ text, onClick, id, Color }) => {

  const getColorClass = (color) => {
    switch (color) {
      case '#4CAF50': return styles.green;
      case '#FFC107': return styles.yellow;
      case '#F44336': return styles.red;
      case '#2196F3': return styles.blue;
      case '#9C27B0': return styles.purple;
      case '#FF5722': return styles.orange;
      case '#009688': return styles.teal;
      case '#3F51B5': return styles.indigo;
      case '#00BCD4': return styles.cyan;
      case '#8BC34A': return styles.lightGreen;
      case '#E91E63': return styles.pink;
      case '#795548': return styles.brown;
      case '#9E9E9E': return styles.grey;
      default: return ''; 
    }
  };

  return (
    <button
      className={`${styles.btn} ${getColorClass(Color)}`} 
      onClick={onClick}
      id={id}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string,
  Color: PropTypes.string.isRequired, 
};

export { Button };