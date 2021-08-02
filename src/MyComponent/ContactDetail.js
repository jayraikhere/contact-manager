import React from 'react'
import { Link } from 'react-router-dom';
const ContactDetail = (props) => {

    const {name,email}= props.location.state.contact;
    return (
        <div>
        <h1>{name}</h1>
        <h3>{email}</h3>
        <Link to="/"><button>Back to contact list</button></Link>
        </div>
    )
}

export default ContactDetail
