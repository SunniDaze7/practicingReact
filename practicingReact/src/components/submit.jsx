import React from "react";
import App from "../App";

const Submit = (props)=>{
    return(
        <>

        <h1>Your CV was submitted!</h1>
        <h3>General Information</h3>
            <p>Name: {props.input.name}</p>
            <p>Phone Number: {props.input.phoneNumber}</p>
            <p>Email: {props.input.email}</p>
        <h3>Education</h3>
            <p>School Name: {props.input.school}</p>
            <p>Major: {props.input.major}</p>
            <p>Date Attended: {props.input.dateAttended}</p>
        <h3>Experience</h3>
            <p>Job Title: {props.input.job}</p>
            <p>Job Desciription: {props.input.description}</p>
            <p>Date Worked: {props.input.dateWorked}</p> 
         {/* button to go back to editing the cv*/}
        <button onClick={()=> props.setSubmitted(false)}>Edit</button>

        </>
    )
}

export default Submit