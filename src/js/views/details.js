import React, { useState } from "react";
import { useParams } from "react-router";

export const Details = () => {
    const {id} = useParams()
    const [details, setDetails] = useState(null)

    return(
        <div>
            
        </div>
    )
    
}
