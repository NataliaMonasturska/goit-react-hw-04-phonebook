import React, { useState } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export const ContactForm = ({ recordsСontactsInState }) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')


  const handleChangeInput = event => {
    if (event.target.name === 'name') {
      setName(event.target.value)
    }
    if (event.target.name === 'number') {
      setNumber(event.target.value)
    }
  };

  const handleSubmitInputName = event => {
    event.preventDefault();
    recordsСontactsInState(name, number);
    setName('')
    setNumber('')
  };

  return (
    <div className={css.cartInputForm}>
      <form className={css.form} onSubmit={handleSubmitInputName}>
        <label className={css.label}>
          <span className={css.inputName}>Name</span>
          <input
            className={css.input}
            onChange={handleChangeInput}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={css.label}>
          <span className={css.inputName}>Number</span>
          <input
            className={css.input}
            onChange={handleChangeInput}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={css.btn}>add contact</button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  recordsСontactsInState: PropTypes.func.isRequired,
};
