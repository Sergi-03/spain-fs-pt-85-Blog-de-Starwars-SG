import React, { useState } from "react";
import { useParams } from "react-router";
import { useEffect} from "react";

export const Details = () => {
    const {id} = useParams()
    const [details, setDetails] = useState(null)

    async function getCharacterDetails() { 
        try {
            let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            let data = await response.json();
            setDetails(data);  
        } catch (error) {
            console.error("Could not fetch data", error);
            
        } 
    }

    useEffect(() => {
        getCharacterDetails();
    }, [id]);

    if (!details) {
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

      