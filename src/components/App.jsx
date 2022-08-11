import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import css from './App.module.css';
const LS_KEY = 'reader_contacts';

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem(LS_KEY,))
    ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]

  );
  const [filterName, setFilterName] = useState('')


  const FilterNormalize = filterName.toLowerCase();

  const filterContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(FilterNormalize)
  })

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts))
  }, [contacts])


  const handleChangeInputFilter = event => {
    setFilterName(event.target.value)
  };

  const recordsСontactsInState = (name, number) => {
    const nameNormalized = name.toLowerCase();
    const dobbleName = contacts.find(
      contact => contact.name.toLowerCase() === nameNormalized
    );
    dobbleName
      ? window.alert(`${name} is already in contacts`)
      :
      setContacts(prevContacts => [
        ...prevContacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ])
  };

  const handleDeleteClick = id => {
    const newContacts = contacts.filter(
      contact => contact.id !== id
    );
    setContacts([...newContacts])
  };

  return (
    <div className={css.appContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm recordsСontactsInState={recordsСontactsInState} />

      <h2 className={css.title}>Contacts</h2>
      <Filter
        filterContact={filterName}
        onChangeFilter={handleChangeInputFilter}
      />
      <ContactList
        contacts={filterContacts}
        onDeleteClick={handleDeleteClick}
      />
    </div>
  );
}

