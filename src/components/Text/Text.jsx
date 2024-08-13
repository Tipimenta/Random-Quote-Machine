import PropTypes from 'prop-types'; 
import style from './Text.module.css'; 

const Text = ({ verse }) => {
    return (
    <div id="text" className={style.text}> 
      <q>{verse}</q>
    </div>
  );
};


Text.propTypes = {
  verse: PropTypes.string.isRequired,
};

export { Text };



