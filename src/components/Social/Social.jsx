import style from './Social.module.css';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const Social = ({xLink, handleCopyLink}) => {
    return (
        <>
             <a href={xLink} className={style.social} id="tweet-quote" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a onClick={handleCopyLink} className={style.social} aria-label="Copiar link">
        <FontAwesomeIcon icon={faCopy} />
        </a>
        </>
    );
}

Social.propTypes = {
    xLink: PropTypes.string.isRequired,
    handleCopyLink: PropTypes.func.isRequired
};

export { Social };
