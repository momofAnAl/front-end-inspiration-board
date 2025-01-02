import PropTypes from 'prop-types';
import './Card.css';

function Card({ id, message, likes_count, onDelete }) {
  return (
      <div className="card-item">
          <p>{message}</p>
          <p>Likes: {likes_count}</p>
          <button onClick={() => onDelete(id)}>Delete</button>
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