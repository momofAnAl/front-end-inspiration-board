import PropTypes from 'prop-types';
import Card from './Card.jsx';
import './CardList.css';


const CardList = ({ cards }) => {
    const cardComponents = cards.map((card) => (
        <Card 
            key={card.id} 
            id={card.id}
            message={card.message}
        />
    ));

    return <div className="card-items__container">{cardComponents}</div>;
};

CardList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
        })
    ).isRequired,
};


export default CardList;





