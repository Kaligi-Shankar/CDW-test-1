import React from 'react'

const Navbar = () => {
  return (
    <>
       <nav  class="navbar" style={{backgroundColor: "#86a3eb"}}>
            <div class="container-fluid">
                <a class="navbar-brand" style={{color: "#ffffff"}}>Team</a>
                <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>
            </div>
        </nav>
    </>
  )
}

export default Navbar