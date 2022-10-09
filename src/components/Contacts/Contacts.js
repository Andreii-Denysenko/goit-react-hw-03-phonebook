import PropTypes from 'prop-types';
import { Button } from './Contacts.styled'



export const Contact = ({ name, number, onDeleteContact, contactId }) => {
  return (
    <><div>
      <p>{name}</p>
      <p>{number}</p>
      </div>
        
        <Button type="button" onClick={() => onDeleteContact(contactId)}>Delete
        </Button>

    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};