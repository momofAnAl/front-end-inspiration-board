import PropTypes from 'prop-types';
import Card from './Card.jsx';
import './CardList.css';

function CardList({ cards, onDelete }) {
    return (
        <div className="card-items-container">
            {cards && cards.map((card) => ( // madina add cards to check 
                <Card 
                    key={card.id} 
                    id={card.id}
                    message={card.message}
                    likes_count={card.likes_count || 0} // madina add like count, 0 for default value
                    onDelete={onDelete} 
                />
            ))}
        </div>
    );
}

CardList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            likes_count: PropTypes.number,  // madina add 
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default CardList;