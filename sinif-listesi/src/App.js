import React, { Component } from 'react';
import $ from 'jquery';

import './styles/App.css';
import Form from './components/Form/Form';
import List from './components/List/List';

class App extends Component {
  state = {
    userList: [],
  };

  onChangeState = getData => {
    const { userList } = this.state;
    userList.push(getData);
    this.setState({
      userList,
    });
  };
  render() {
    const { userList } = this.state;
    return (
      <div className="App">
        <List data={userList} />
        <Form onChangeState={this.onChangeState} />
      </div>
    );
  }
}

export default App;
