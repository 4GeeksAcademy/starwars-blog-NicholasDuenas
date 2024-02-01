import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export const PlanetDescription = () => {
    const {id} = useParams()
    const [planet, setPlanet] = useState([])
    useEffect(()=>{
        async function getPlanet() {
            let response = await fetch("https://swapi.dev/api/planets/"+id)
            let data = await response.json()
            setPlanet(data)
        }
        getPlanet()
    }, []) 
    return (
	<div className="text-center mt-5">
        <h1>{planet.name}</h1>
        <h3>Climate: {planet.climate}</h3>
        <h3>Gravity: {planet.gravity}</h3>
        <h3>Population: {planet.population}</h3>
        <h3>Orbital Period: {planet.orbital_period}</h3>
	</div>
)};