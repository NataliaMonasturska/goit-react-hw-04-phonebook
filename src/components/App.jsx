import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import css from './App.module.css';
const LS_KEY = 'reader_contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount(){
    const contacts = JSON.parse(localStorage.getItem(LS_KEY,));
    console.log(typeof contacts) ;
    if(contacts){
      this.setState({contacts})
    }
  
  }
  componentDidUpdate(_, prevState){
   if(prevState.contacts !== this.state.contacts){
    localStorage.setItem(LS_KEY,JSON.stringify(this.state.contacts))
   }
  }

  handleChangeInputFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  getFilterContactsByName = () => {
    const { filter, contacts } = this.state;
    const FilterNormalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(FilterNormalize)
    );
  };

  recordsСontactsInState = (name, number) => {
   const nameNormalized = name.toLowerCase();
    const dobbleName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === nameNormalized
    );
    dobbleName
      ? window.alert(`${name} is already in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [
              ...prevState.contacts,
              {
                id: nanoid(),
                name,
                number,
              },
            ],
          };
        });
  };

  handleDeleteClick = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({
      contacts: [...newContacts],
    });
  };

  render() {
    const filtercontactsByName = this.getFilterContactsByName();

    return (
      <div className={css.appContainer}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm recordsСontactsInState={this.recordsСontactsInState} />

        <h2 className={css.title}>Contacts</h2>
        <Filter
          filterContact={this.state.filter}
          onChangeFilter={this.handleChangeInputFilter}
        />
        <ContactList
          contacts={filtercontactsByName}
          onDeleteClick={this.handleDeleteClick}
        />
      </div>
    );
  }
}
