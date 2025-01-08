import { useState } from 'react';
import './NewBoardForm.css';
import PropTypes from 'prop-types';

const NewBoardForm = ({handleSubmit}) => {
    const [boardForm, setBoardForm] = useState({
        title: '',
        owner: '',
    });
    const [error, setError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBoardForm({ ...boardForm, [name]: value });
      };
    
      const onHandleSubmit = (event) => {
        event.preventDefault();
        if (!boardForm.title || !boardForm.owner) {
          setError('Title and Owner are required.');
          return;
        }
        setError('');
        handleSubmit(boardForm);
        setBoardForm({ title: '', owner: '' });
      };

    return (
        <form className="new-board-form" onSubmit={onHandleSubmit}>
            <div>
                <label htmlFor="title">Title: </label>
                <input
                id="text"
                name="title"
                value={boardForm.title}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="owner">Owner: </label>
                <input
                id="text"
                name="owner"
                value={boardForm.owner}
                onChange={handleChange}
                />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button className="new-board-form-submit-btn" type="submit">
                Submit
            </button>
        </form>
    );
};

NewBoardForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default NewBoardForm;