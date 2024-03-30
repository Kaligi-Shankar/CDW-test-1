import React from 'react'

const Navbar = (props) => {
  return (
    <>
       <nav  className="navbar" style={{backgroundColor: "#86a3eb"}}>
            <div className="container-fluid">
                <a href="#" className="navbar-brand" style={{color: "#ffffff"}}>Team</a>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
                value={props.searchQuery} 
                onChange={props.handleSearchInputChange}/>
                </form>
            </div>
        </nav>
    </>
  )
}

export default Navbar