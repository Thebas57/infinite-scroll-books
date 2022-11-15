import React from "react";
import Book from "./Book";

const Books = ({ props }) => {
  return (
    <div className="books">
      {props.map((book) => {
        return <Book props={book} key={book.id} />;
      })}
    </div>
  );
};

export default Books;
