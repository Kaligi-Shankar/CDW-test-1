import React from 'react'

const Card = () => {
  return (
    <div style={{display: "flex", background: "white", borderRadius: "5px", width: '355px', height: '65px', boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
        <div style={{flex: 0.5, display: "flex", padding: "6px", justifyContent: "center"}}>
            <div style={{width: "80%", borderRadius: "50%", background: "black", height: "100%"}}>

            </div>
        </div>
        <div style={{flex: 2, display: "flex", flexDirection: 'column', justifyContent: "center"}}>
            <h3 style={{fontSize: "18px", marginBottom: "2px"}}> Name </h3>
            <h4 style={{fontSize: "12px", color: "slategray", margin: '0'}}> abc@email.com </h4>
        </div>
    </div>
  )
}

export default Card