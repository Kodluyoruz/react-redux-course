import React from 'react';

import './Form.css';

class Form extends React.Component {
  state = {
    data: { name: '', lastname: '' },
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onChangeState(this.state);
  };

  render() {
    const { name, lastname } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="fname">First Name</label>
          <input
            value={name}
            name="name"
            onChange={this.onChange}
            type="text"
            id="fname"
            placeholder="Your name.."
          />
          <label htmlFor="lname">Last Name</label>
          <input
            value={lastname}
            onChange={this.onChange}
            name="lastname"
            type="text"
            id="lname"
            placeholder="Your last name.."
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Form;
