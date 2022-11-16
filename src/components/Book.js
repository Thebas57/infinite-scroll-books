import React from 'react'

const Book = ({props}) => {
  return (
    <div className="book">
      <div className="header-book">
      <div className="img-book">
        { props.volumeInfo.imageLinks ? <img src={props.volumeInfo.imageLinks.thumbnail} alt="book-img" /> : <h1> pas foto</h1>}
      </div>
      </div>
      <div className="content-book">
        <span>Auteur : {props.volumeInfo.authors ? props.volumeInfo.authors[0] : <h1>Pas d'autheur</h1>} </span>
        <span>Publieur : {props.volumeInfo.publisher} </span>
        <span>Description : {props.volumeInfo.description} </span>
        <span>Nb page : {props.volumeInfo.pageCount} </span>
        <span>Plus d'info <a href={props.volumeInfo.infoLink}>Voir plus</a> </span>
      </div>
    </div>
  )
}

export default Book