import PropTypes from 'prop-types';
import Card from './Card.jsx';
import './CardList.css';

function CardList({ cards, onDelete }) {
    return (
        <div className="card-items-container">
            {cards.map((card) => (
                <Card 
                    key={card.id} 
                    id={card.id}
                    message={card.message} 
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
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default CardList;