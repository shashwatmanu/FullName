import React from 'react'
import { useState } from 'react'

const Name = () => {
    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [shouldDisplay, setShouldDisplay] = useState(false);

    const handleSubmit = (e) =>{
e.preventDefault();
setFirstName(e.target[0].value);
setLastName(e.target[1].value); 

if(e.target[0].value===""){
    setFirstNameError(true);
}
else{ 
    setFirstNameError(false);
   
}
if(e.target[1].value===""){
    setLastNameError(true);
}
else {setLastNameError(false);
  
}
if(e.target[0].value!==""&& e.target[1].value!==""){
    setShouldDisplay(true);
}
else setShouldDisplay(false);

    }

//     const handleFirstName = (e) =>{
// setFirstName(e.target.value);
//     }
//     const handleLastName = (e) =>{
//         setLastName(e.target.value)
//     }

  return (
    <>
    <h2>Full Name Display</h2>
    <form onSubmit={handleSubmit}>
        <label for="first">First Name:</label>
        <input type='text' id='first' ></input>
        {firstNameError?(<div>Please fill out this field</div>):""}
        <br/>
        <label for="last">Last Name:</label>
        <input type='text' id='last' ></input>
        {lastNameError?(<div>Please fill out this field</div>):""}
        <br/>
        <button>Submit</button>
        {shouldDisplay?(<div><span style={{fontWeight:'600'}}>Full name:</span> {firstName} {lastName}</div>):""}
    </form>
    </>
  )
}

export default Name