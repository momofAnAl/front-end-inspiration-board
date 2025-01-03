import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ id, message, likesCount, onLike, onDelete }) => {

  return (
    <div className="card-item">
      <p className="card-message">{message}</p>
      <div className="card-footer">
        <p className="card-likes">Likes: {likesCount}</p>
        <div className="card-buttons">
            <button className="like-button" onClick={() => onLike(id)}>❤️</button>
            <button className="delete-button" onClick={() => onDelete(id)}>Delete</button>
        </div>
      </div>
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