import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    const url = "https://5c7cfd0ddd19010014c8e947.mockapi.io/api/v1/books";

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          books: result
        });
      });
  }

  removeBook = index => {
    const { books } = this.state;
    this.setState({
      books: books.filter((book, i) => {
        return i !== index;
      })
    });
  };
  handleSubmit = book => {
    this.setState({ books: [...this.state.books, book] });
  };
  render() {
    const { books } = this.state;
    return (
      <div className="container">
        <Table bookData={books} removeBook={this.removeBook} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
