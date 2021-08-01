// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';
import {Header} from './MyComponent/Header'
import AddContact from './MyComponent/AddContact'
import ContactList from './MyComponent/ContactList'
import { uuid } from 'uuidv4';



function App() {

  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Dipesh1",
  //     email:"dip1@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     name: "Dipesh2",
  //     email:"dip2@gmail.com"
  //   },
  //   {
  //     id: "3",
  //     name: "Dipesh3",
  //     email:"dip3@gmail.com"
  //   }
  // ]

  const LOCAL_STORAGE_KEY = 'contacts';

  const [contacts, setContacts] = useState([]);

  const addConatactHandler = (contact)=>{
    console.log(contact);
    setContacts([...contacts,{id:uuid(),...contact}]);
  }

  const removeContactHandler = (id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(()=>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); 
    if(retriveContacts){
      setContacts(retriveContacts);
    }
  },[]); 

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)); 
  },[contacts]);

  

  return (
<>

    <div>
      <Header/>
      <AddContact addConatactHandler={addConatactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
</>
  );
}

export default App;
 