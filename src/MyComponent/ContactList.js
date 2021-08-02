import React from 'react'
import { Link } from 'react-router-dom';

import ContactCard from './ContactCard';


const ContactList = (props) => {
    // console.log(props)


    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
        );
    })

    return (
        <div>
            <h2>Contact list</h2>
            <Link to='/add'><button>Add Contacts</button></Link>
            {renderContactList}
        </div>
    )
}

export default ContactList
