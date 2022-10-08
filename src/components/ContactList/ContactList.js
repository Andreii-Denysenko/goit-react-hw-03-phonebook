import PropTypes from 'prop-types';
import { Contact } from '../Contacts/Contacts';
import { List, Item } from './ContactList.styled'

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
              contactId={id}
            />
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
