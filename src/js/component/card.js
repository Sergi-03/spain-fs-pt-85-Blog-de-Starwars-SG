import React from "react";

const Card = ({title, text, imgUrl}) => {
    return(
        <div className="card" style={{ width: "18rem"}}>
        <img src={imgUrl} className="card-img-top img-fluid" alt="...">
        </img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <button className="btn btn-primary">Learn more!</button>
          <span>
          <button type="button" class="btn btn-outline-warning">
          <i class="fa-solid fa-heart"></i>
          </button>
          </span>
        </div>
      </div>
    )
}

export default Card;