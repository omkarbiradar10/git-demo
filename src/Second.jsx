import React from "react"
import { useLocation } from "react-router-dom"


 export default function Second(){

     let location = useLocation();
    return (
        <>

         <h1>{location.state.x}</h1>
        <h2>{location.state.y}</h2>
        </>
    )

}