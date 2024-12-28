import { useState } from 'react';
import './NewBoardForm.css';
import PropTypes from 'prop-types';

const NewBoardForm = ({onBoardAdd}) => {
    const [boardForm, setBoardForm] = useState({
        title: '',
        owner: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        onBoardAdd(boardForm);
        setBoardForm({
            title: '',
            owner: '',
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBoardForm({
            ...boardForm,
            [name]: value
        });
    };

    return (
        <form className="new-board-form" onSubmit={handleSubmit}>
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
            <button className="new-board-form-submit-btn" type="submit">
                Submit
            </button>
        </form>
    );
};

NewBoardForm.propTypes = {
    onBoardAdd: PropTypes.func.isRequired,
};

export default NewBoardForm;