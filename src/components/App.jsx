import { Component } from 'react';
import { Form } from '../components/Form/Form';
import { ContactList } from '../components/ContactList/ContactList';
import { Message } from '../components/Message/Message'
import { Filter } from '../components/Filter/Filter'
import { Section } from './App.styled'
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContacts = { id: nanoid(), name, number };
    const { contacts } = this.state;
    contacts.find(data => data.name === name) ? alert(`${name} is already in contacts`) : this.setState(({ contacts }) => ({
          contacts: [newContacts, ...contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filtredContacts = () => {
    const { filter, contacts } = this.state;
    const toLowerCaseFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(toLowerCaseFilter)
    );
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const addContact = this.addContact;
    const changeFilter = this.changeFilter;
    const deleteContact = this.deleteContact;
    const { filter } = this.state;
    const filtredContacts = this.filtredContacts();
    const lengthContactsList = this.state.contacts.length;

    return (
      <Section>
        <h1>
          Phonebook
        </h1>
        <Form onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} changeFilter={changeFilter} />
        {lengthContactsList > 0 ? (
          <ContactList
            contacts={filtredContacts}
            onDeleteContact={deleteContact}
          />
        ) : (
          <Message text="Contact list is empty." />
        )}
      </Section>
    );
  }
 
}
