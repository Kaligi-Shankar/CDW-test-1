import React from 'react'
import Card from './Card'

const Adminstrators = (props) => {
  let admins=props.filteredUsers.filter(eachrole=>eachrole.role==='admin')
  return (
    <div className="padding-div" >
        <h5 >Adminstrators</h5>
        <div className='cards-container'>
          {admins.map((admin, index)=>{
            return <Card key={index} firstName={admin.first_name} lastName={admin.last_name} email={admin.email} img={admin.img}/>
          })}
        </div>
    </div>
  )
}

export default Adminstrators