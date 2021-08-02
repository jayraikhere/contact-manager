import React from 'react'
import { Link } from 'react-router-dom';
const ContactCard = (props) => {

    const {id,name,email}=props.contact;

    return (
        <div>
            <div>
                <Link to={{pathname:`/contact/${id}` , state: {contact: props.contact}}}>
                <h1>
                 {name}
                </h1>
                <h3>
                {email}
                </h3>
                </Link>
                <button onClick = {()=>props.clickHandler(id)}>Delete</button>
                {/* <i></i> */}
            </div>
        </div>
    )
}

export default ContactCard
