import style from './Social.module.css';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Social = ({xLink}) => {
    return (
        <>
             <a href={xLink} className={style.social} id="tweet-quote" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} />
            </a>
        </>
    );
}

Social.propTypes = {
    xLink: PropTypes.string.isRequired,
};

export { Social };
