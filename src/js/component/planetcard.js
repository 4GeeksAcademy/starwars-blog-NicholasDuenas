import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PlanetCard = () => {
    const [planets, setPlanets] = useState([])
    useEffect(()=>{
        async function getPlanets() {
            let response = await fetch("https://swapi.dev/api/planets")
            let data = await response.json()
            setPlanets(data.results)
        }
        getPlanets()
    }, [])
    return (<div className="d-flex col-10 overflow-auto mx-auto mt-5">
        {planets?.map((item, index)=>(
            <div className="card" style={{minWidth:"18rem"}} key={index}>
            <img src="https://pm1.aminoapps.com/6030/ff502e05b60126ee3549ef2848cf54b863b75f98_hq.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <Link to={"/PlanetDescription/"+(index+1)} className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        ))}
    </div>)
}