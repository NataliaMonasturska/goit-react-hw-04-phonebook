import React from 'react';
import { Contact } from 'components/ContactList/Contact/Contact';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteClick }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
