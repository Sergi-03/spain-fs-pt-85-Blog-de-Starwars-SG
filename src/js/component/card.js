import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({title, imgUrl, id,}) => {
    const {actions} = useContext(Context)

    return(
        <div className="card" style={{ width: "18rem"}}>
        <img src={imgUrl} className="card-img-top img-fluid" alt="...">
        </img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <Link to={`/details/${id}`}>
          <button className="btn btn-primary">Learn more!</button>
          </Link>
          <span>
          <button type="button" className="btn btn-outline-warning">
          <i className="fa-solid fa-heart" onClick={() => actions.addFavorite(title)}></i>
          </button>
          </span>
        </div>
      </div>
    )
}

export default Card;