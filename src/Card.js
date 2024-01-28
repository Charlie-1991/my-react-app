import React from "react";


function Card(props) {
  return <div className='my-style'>
    <h2>{props.name}</h2>
    <img
    src={props.img}
    alt="avatar_img"/>
    <p className="tel">{props.tel}</p>
    <p className="email">{props.email}</p>
  </div>
}

export default Card;
