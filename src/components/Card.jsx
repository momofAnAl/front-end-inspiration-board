import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ id, message, likesCount, onLike, onDelete }) => {

  return (
      <div className="card-item">
          <p>{message}</p>
          <p>Likes: {likesCount}</p>
          <button onClick={() => onLike(id)}>❤️</button>
          <button onClick={() => onDelete(id)}>Delete</button>
      </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number,
  onDelete: PropTypes.func,
  onLike: PropTypes.func,
};

export default Card;