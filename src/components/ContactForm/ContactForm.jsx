import React, { Component } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = event => {
    this.setState({
     [event.target.name]: event.target.value,
    });
  };


  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleSubmitInputName = event => {
    event.preventDefault();
    const { recordsСontactsInState } = this.props;
    const { name, number } = this.state;
    recordsСontactsInState(name, number);
    this.reset();
  };

  onReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div className={css.cartInputForm}>
        <form className={css.form} onSubmit={this.handleSubmitInputName}>
          <label className={css.label}>
            <span className={css.inputName}>Name</span>
            <input
            className={css.input}
              onChange={this.handleChangeInput}
              value={this.state.name}
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
              onChange={this.handleChangeInput}
              value={this.state.number}
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
}
ContactForm.propTypes = {
  recordsСontactsInState: PropTypes.func.isRequired,
};
