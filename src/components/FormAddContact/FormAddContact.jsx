import React, { Component } from 'react';
import { nanoid } from 'nanoid';



export class FormAddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({name, number});
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { nameId, numberId, handleSubmit, handleChange } = this;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={nameId}>Name</label>
          <input
            name="name"
            id={nameId}
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={handleChange}
            
            required
          />
        </div>

        <div>
          <label htmlFor={numberId}>Number</label>
          <input
            name="number"
            id={numberId}
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={handleChange}
            
            required
          />
        </div>

        <button>Add contact</button>
      </form>
    );
  }
}
