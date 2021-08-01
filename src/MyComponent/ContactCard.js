import React from 'react'

const ContactCard = (props) => {

    const {id,name,email}=props.contact;

    return (
        <div>
                <div>
                <h1>
                 {name}
                </h1>
                <h3>
                {email}
                </h3>
                <button onClick = {()=>props.clickHandler(id)}>Delete</button>
                {/* <i></i> */}
            </div>
        </div>
    )
}

export default ContactCard
