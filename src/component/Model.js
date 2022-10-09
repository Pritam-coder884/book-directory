import React from "react";
import "./Model.css";

const Model = ({show,item,onClose}) => {
  if(!show){
    return null;
  }
  let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <div className="overlay">
      <div className="overlay-inner">
        <button className="close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="inner-box">
          <img src={thumbnail} alt="" />
          <div className="info">
            <h1>{item.volumeInfo.title}</h1>
            <h3>{item.volumeInfo.authors}</h3>
            <h4>
              {item.volumeInfo.publisher}
              <span>{item.volumeInfo.publishedDate}</span>
            </h4>
            <br />
           <div className="btn">
           <a href={item.volumeInfo.previewLink}>
              <button>More</button>
            </a>
            <a href={process.env.REACT_APP_SERVER_URL}>
              <button>Purchase</button>
            </a>
           </div>
          </div>
        </div>
        <h4 className="description">{item.volumeInfo.description}</h4>
      </div>
    </div>
  );
};

export default Model;
