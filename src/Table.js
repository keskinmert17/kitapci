import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>kitap</th>
        <th>yazar</th>
        <th>yayinevi</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.bookData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.kitap}</td>
        <td>{row.yazar}</td>
        <td>{row.yayinevi}</td>
        <td>
          <button onClick={() => props.removeBook(index)}>Sil</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { bookData, removeBook } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody bookData={bookData} removeBook={removeBook} />
      </table>
    );
  }
}
export default Table;
