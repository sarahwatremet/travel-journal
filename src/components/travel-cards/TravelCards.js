import React from "react"
import './travelCards.css'


export default function TravelCards(props) {
    return (
        <div className="travel--card">

            <img
                className="travel--picture"
                src={props.item.imageUrl}
                alt="location's landscape">
            </img>

            <div className="travel--info">
                <div className="travel--location">
                    <img className="location--pointer" alt="pointer icon" src={process.env.PUBLIC_URL + "/images/pointer.svg"}></img>
                    <span className="travel--country">{props.item.location}</span>
                    <span className="travel--url"><a href={ props.item.googleMapsUrl }>View on Google Maps</a></span>
                </div>

                <div className="card--text">
                    <h2 className="card--title">{props.item.title}</h2>
                    <div className="travel--dates">{props.item.startDate} - {props.item.endDate}</div>
                    <p className="travel--description">{ props.item.description }</p>
                </div>
            </div>
        
        </div>
    )
}