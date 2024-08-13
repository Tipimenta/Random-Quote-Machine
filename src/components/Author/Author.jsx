import style from './Author.module.css'
import PropTypes from 'prop-types'; 

const Author = ({localizacao}) => {
    return (
        <div id="author" className={style.author}>{localizacao}</div>
    );
};

Author.propTypes = { 
    localizacao: PropTypes.string.isRequired,
};

export { Author }