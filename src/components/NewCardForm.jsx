import { useState } from 'react';
import PropTypes from 'prop-types';

const NewCardForm = ({ onCardAdd, boardId }) => {
  const [cardForm, setCardForm] = useState({
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onCardAdd(cardForm);
    setCardForm({
      message: '',
    });
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setCardForm({
      ...cardForm,
      [name]: value
    });
  };

  return (
    <form className="new-card-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="message">Message: </label>
        <input
        id="text"
        name="message"
        value={cardForm.message}
        onChange={handleChange}
        />
      </div>
      <button className="new-card-form-submit-btn" type="submit">
          Submit
      </button>
    </form>
  );
};

NewCardForm.propTypes = {
    onCardAdd: PropTypes.func.isRequired,
    boardId: PropTypes.number.isRequired,
};

export default NewCardForm;