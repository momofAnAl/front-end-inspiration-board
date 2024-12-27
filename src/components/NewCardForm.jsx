import { useState } from 'react';

const NewCardForm = ({ handleSubmit, cardId }) => {
  const kDefaultFormState = {
    message: '',
  };

  const [formData, setFormData] = useState(kDefaultFormState);

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...formData, [fieldName]: fieldValue };
    setFormData(newFormData);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    setFormData(kDefaultFormState);
  };

  return (
    <section className="cards__container">
      {/* <section>
        <h2> Cards for Pick-me-up Quotes</h2>
      </section> */}
      <section className="new-card-form__container">
        <h2>{cardId ? 'Update the card' : 'Add a new card'}</h2>
          <form className="new-card-form__form" onSubmit={onHandleSubmit}>
              <label htmlFor="message">Message:</label>
              <input
                  type="text"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
              />
              <button type="submit">{cardId ? 'Update' : 'Submit'}</button>
          </form>
      </section>
    </section>
	);
};

export default NewCardForm;