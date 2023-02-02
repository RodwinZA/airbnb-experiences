import React from "react"
import Star from "../images/star.png"

export default function Card (props){

    let badgeText

    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.country === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} alt="katie zaferes" className="card--image" />
            <div className="card--stats">
                <img src={Star} alt="star" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) &#x2022; </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}