import React, { Component } from 'react';

import './List.css';

class List extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <table id="customers">
          <thead>
            <tr>
              <th>Name</th>
              <th>Lastname</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default List;
