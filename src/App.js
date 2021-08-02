// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';
import {Header} from './MyComponent/Header'
import AddContact from './MyComponent/AddContact'
import ContactList from './MyComponent/ContactList'
import { uuid } from 'uuidv4';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import ContactDetail from './MyComponent/ContactDetail';

// import Search from './MyComponent/Search';


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
      <Router>

        <Header/>
        <Switch>

        {/* <Route exact path="/" component={()=>(<ContactList contacts={contacts} getContactId={removeContactHandler}/>)}/> */}

    <Route
    exact 
    path='/'
    render={(props)=>(<ContactList {...props} contacts={contacts} getContactId={removeContactHandler}/>)}>

    </Route>

    <Route
    exact 
    path="/add"
    render={(props)=>(<AddContact {...props} addConatactHandler={addConatactHandler}/>)}>

    </Route>

        {/* <Route path="/add" component={()=>(<AddContact addConatactHandler={addConatactHandler}/>)}/> */}
        {/* <AddContact addConatactHandler={addConatactHandler}/>
        <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}

        <Route
        path="/contact/:id" component={ContactDetail}></Route>

        </Switch>
      </Router>

    </div>
</>
  );
}

export default App;
 