import React from 'react'

const Card = (props) => {
  return (
    <div className="eachcard" >
        <div style={{flex: 0.5, display: "flex", padding: "6px", justifyContent: "center"}}>
            <div className='cardImage'  style={{backgroundImage: `url(${props.img})`}}></div>
        </div>
        <div style={{flex: 2, display: "flex", flexDirection: 'column', justifyContent: "center"}}>
            <h3 className="cardName" > {props.firstName} {props.lastName} </h3>
            <h4 className="cardMail" > {props.email} </h4>
        </div>
    </div>
  )
}

export default Card