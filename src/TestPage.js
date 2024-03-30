import React from 'react';
import Navbar from './Navbar';
import Members from './Members';
import Adminstrators from './Adminstrators';
import data from './data.json'



const TestPage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  //filter the search input
  const filteredUsers = data.filter(user => {
    const fullName = `${user.first_name} ${user.last_name}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
  //method to call onchange search query
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
    <Navbar handleSearchInputChange={handleSearchInputChange} searchQuery={searchQuery}/>
    <Adminstrators filteredUsers={filteredUsers}/>
    <hr/>
    <Members filteredUsers={filteredUsers}/>
    </>
  )
}

export default TestPage