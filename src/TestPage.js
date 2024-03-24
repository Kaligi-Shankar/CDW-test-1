import React from 'react';
import Navbar from './Navbar';
import Members from './Members';
import Adminstrators from './Adminstrators';


const TestPage = () => {
  return (
    <>
    <Navbar/>
    <Adminstrators/>
    <hr/>
    <Members/>
    </>
  )
}

export default TestPage