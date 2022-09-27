import React, { Component } from 'react';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { ContactsList } from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';

export class App extends Component {

  state = {
    contacts: [],
  name: ''
  }

  addContact = (data) => {
    this.setState((prev) => {
      const newContact = {
        id: nanoid(),
        ...data
      }
      return {
        contacts: [...prev.contacts, newContact]
      }
    })
  }

  render() {
    const { addContact } = this;
    const { contacts } = this.state;
    return (
      <div>
        <h1>PhoneBook</h1>
        <FormAddContact onSubmit={addContact}/>
        <h2>Contacts</h2>
        <ContactsList items={contacts}/>
      </div>
    );
  }
}
