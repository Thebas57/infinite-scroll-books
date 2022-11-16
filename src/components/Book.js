import React from "react";

const Book = ({ props }) => {
  return (
    <div className="book">
      <div className="header-book">
        <div className="img-book">
          {props.volumeInfo.imageLinks ? (
            <img src={props.volumeInfo.imageLinks.thumbnail} alt="book-img" />
          ) : (
            <img src="./img/no-photo.svg" alt="book-img" />
          )}
        </div>
        <div className="header-info">
          <span className="title">
            {props.volumeInfo.title ? (
              props.volumeInfo.title
            ) : (
              <span> Inconnu </span>
            )}{" "}
          </span>
          <span className="line-book">
            <span>
              Auteur :{" "}
              {props.volumeInfo.authors ? (
                props.volumeInfo.authors[0]
              ) : (
                <span> Inconnu </span>
              )}{" "}
            </span>
          </span>
          <span className="line-book">
            Publieur :{" "}
            {props.volumeInfo.publisher ? (
              props.volumeInfo.publisher
            ) : (
              <span> Inconnu </span>
            )}{" "}
          </span>
          <span className="line-book">
            Nb page : {props.volumeInfo.pageCount}{" "}
          </span>
          <span>
            <a
              href={props.volumeInfo.infoLink}
              target="_blank"
              rel="noreferrer"
            >
              Plus d'info
            </a>{" "}
          </span>
        </div>
      </div>
      <div className="content-book">
        {props.volumeInfo.description ? (
          <span>{props.volumeInfo.description} </span>
        ) : (
          <span>Aucune description disponible </span>
        )}
      </div>
    </div>
  );
};

export default Book;
