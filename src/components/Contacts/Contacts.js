import React from 'react';
import PropTypes from 'prop-types';

export default function Contacts({ contacts, filter, onDelete }) {
  if (contacts.length === 0) return;

  return (
    <ul>
      {filterContacts(contacts, filter).map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number} {}
          <button
            type="button"
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

function filterContacts(contacts, filter) {
  if (!filter) {
    return contacts;
  }
  return contacts.filter(
    ({ name }) => name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  );
}

Contacts.propTypes = {
  filter: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
