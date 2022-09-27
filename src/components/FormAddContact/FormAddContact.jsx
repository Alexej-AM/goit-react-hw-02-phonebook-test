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
            value={this.state.name}
            onChange={handleChange}
            minLength={3}
          />
        </div>

        <div>
          <label htmlFor={numberId}>Number</label>
          <input
            name="number"
            id={numberId}
            type="tel"
            value={this.state.number}
            onChange={handleChange}
            minLength={3}
          />
        </div>

        <button>Add contact</button>
      </form>
    );
  }
}
