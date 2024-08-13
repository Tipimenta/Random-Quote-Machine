import PropTypes from 'prop-types';
import style from "./Card.module.css";
import { Text, Author, Button, Social } from "../../components";

const Card = ({ versiculoData, generateVersiculo, xLink, Color }) => {
  return (
    <div id="quote-box" className={style.card}>
      <Text verse={versiculoData.versiculo} />
      <Author localizacao={versiculoData.localizacao} />
      <div className={style.divider}>
      <Button 
        text="Novo Versículo" 
        onClick={generateVersiculo} 
        id="new-quote"  
        Color={Color} 
      />
      <Social xLink={xLink}/>
      </div>
    </div>
  );
}

Card.propTypes = {
  versiculoData: PropTypes.shape({
    versiculo: PropTypes.string.isRequired,
    localizacao: PropTypes.string.isRequired
  }).isRequired,
  generateVersiculo: PropTypes.func.isRequired,
  xLink: PropTypes.string.isRequired,
  Color: PropTypes.string.isRequired, 
};

export { Card };
