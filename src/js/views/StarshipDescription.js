import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export const StarshipDescription = () => {
    const {id} = useParams()
    const [ship, setShip] = useState([])
    useEffect(()=>{
        async function getShip() {
            let response = await fetch("https://swapi.dev/api/starships/"+id)
            let data = await response.json()
            setShip(data)
        }
        getShip()
    }, []) 
    return (
	<div className="text-center mt-5">
        <h1>{ship.name}</h1>
        <h3>Manafacturer: {ship.manufacturer}</h3>
        <h3>Cost In Credits: {ship.cost_in_credits}</h3>
        <h3>Cargo Capacity: {ship.cargo_capacity}</h3>
        <h3>Hyperdrive Rating: {ship.hyperdrive_rating}</h3>
	</div>
)};