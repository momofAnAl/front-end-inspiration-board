import PropTypes from 'prop-types';
import './Card.css'

const Card = ({ 
    id, 
    message 
}) => {


  return (
    <section className="card__container">
      <h2> Cards for Pick-me-up Quotes </h2>
      <div className="card-items__container">
        <div className="card-item">
          <p className="card-item__message">{message}</p>
        </div>
      </div>
    </section>
  );
}


Card.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
};

export default Card


