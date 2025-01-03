import PropTypes from 'prop-types';
import './Card.css';

function Card({ id, message, likes_count, onDelete }) {
  return (
    <div className="card-item">
    <p className="message">{message}</p>
    <div className="card-actions">
      <p>Likes: {likes_count}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number,
  onDelete: PropTypes.func,
};

export default Card;