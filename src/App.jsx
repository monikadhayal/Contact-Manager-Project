import { useEffect, useState } from 'react'
import ContactList from './component/ContactList'
import ContactsManage from './component/ContactsManage'
// import Header from './component/Header'
import uuid4 from 'uuid4'


function App() {

const localStorageKey = "contact"
const[contact, setContact] = useState(() => {
 return JSON.parse (localStorage.getItem(localStorageKey))

 || []})


useEffect (() => {
   localStorage.setItem(localStorageKey, JSON.stringify(contact))
},[contact])

const addContact = (data) => {
 setContact([...contact,{id:uuid4(),  data} ])
}
 const removeContact =(id) => {
     const updatedList = contact.filter((val) => {
      return val.id !== id;
       })
     setContact(updatedList);
 }
 return(
  <div>
     <ContactsManage addContact = {addContact}/>
     <ContactList contact={contact} removeContact ={removeContact}/>
     {/* <Header/> */}
  </div>
 )
  
}

export default App
