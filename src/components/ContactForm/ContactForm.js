import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputData = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };

  setUserInfo = event => {
    event.preventDefault();
    const { addInfoToList } = this.props;
    addInfoToList(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.setUserInfo}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="name"
          value={this.state.name}
          onChange={this.inputData}
        />
        <br />
        <label htmlFor="phone">Phone</label>
        <br />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="phone"
          value={this.state.number}
          onChange={this.inputData}
        />
        <br />
        <button className="button filter__button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  inputData: PropTypes.func,
};
