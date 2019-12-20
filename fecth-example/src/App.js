import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    getData: [],
    status: 0,
    errors: false
  };
  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (data.status !== 200) {
      this.setState({ errors: true });
    } else {
      this.setState({
        getData: await data.json(),
        status: data.status,
        errors: false
      });
    }
  }

  getDataComponent = () => {
    const { getData, status, errors } = this.state;

    if (!errors && getData && getData.length && status === 200) {
      return getData.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <p>{item.userId}</p>
        </div>
      ));
    } else {
      return <p>Hata</p>;
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Fetch Örnek</h1>
        {this.getDataComponent()}
      </div>
    );
  }
}

export default App;
