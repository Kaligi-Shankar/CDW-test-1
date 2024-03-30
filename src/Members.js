import React from 'react'
import Card from './Card'

const Members = (props) => {
  let Members=props.filteredUsers.filter(eachrole=>eachrole.role==='member')

  return (
    <div className="padding-div">
        <h5 >Members</h5>
        <div className='cards-container'>
        {Members.map((member, index)=>{
            return <Card key={index} firstName={member.first_name} lastName={member.last_name} email={member.email} img={member.img}/>
          })}
        </div>
    </div>
  )
}

export default Members