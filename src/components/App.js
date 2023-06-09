import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import {
  getDataFromLocaleStorage,
  removeFromLocaleStorage,
  setDataToLocalStorage,
} from './Storage/storage';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const listOfContacts = getDataFromLocaleStorage();
    if (listOfContacts) this.setState({ contacts: listOfContacts });
  }

  addInfoToList = ({ name, number }) => {
    this.state.contacts.find(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in contacts!`)
      : this.setState(({ contacts }) => {
          return {
            contacts: [
              ...contacts,
              { id: nanoid(), name: name, number: number },
            ],
          };
        });
  };

  inputData = ({ currentTarget }) => {
    this.setState({ [currentTarget.name]: currentTarget.value });
  };

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (
      prevState.contacts.length !== contacts.length &&
      contacts.length !== 0
    ) {
      setDataToLocalStorage(contacts);
    } else if (contacts.length === 0) {
      removeFromLocaleStorage();
    }
  }

  delete = indexID => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contact => contact.id !== indexID),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm addInfoToList={this.addInfoToList} />
        <h2>Contacts</h2>
        <Filter inputData={this.inputData} />
        <Contacts contacts={contacts} filter={filter} onDelete={this.delete} />
      </div>
    );
  }
}
