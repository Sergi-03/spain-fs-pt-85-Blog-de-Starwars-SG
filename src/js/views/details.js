import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { useEffect} from "react";
import { Context } from "../store/appContext";

export const Details = () => {
    const {id} = useParams()
    const {store, actions} = useContext(Context)
    const details = store.characterDetails

    useEffect(() => {
       actions.getCharacterDetails(id)
    }, [id]); 

    if (!store.characterDetails) {
        return <div>No details available</div>;
    }


    return (
        <div>
        <div className="jumbotron">
        <h1 className="display-4">{details.name}</h1>
        <img src={details.image}/>
        <hr className="my-4"/>
        <ul>
        <li>
        Status: {details.status}
        </li>
        <li>
        Species: {details.species}
        </li>
        <li>
        Gender: {details.gender}
        </li>
        <li>
        Location: {details.location.name}
        </li>
        <li>
        Origin: {details.origin.name}
        </li>
        </ul>
        </div>
        </div>
    );
};
