
import ContactList from './component/ContactList'
import ContactsManage from './component/ContactsManage'
import Header from './component/Header'



function App() {

  

const addContact = (data) => {
  console.log(data, "from app.jsx")
}

 return(
  <div>
<ContactsManage addContact = {addContact}/>
<Header/>
<ContactList/>
  </div>
 )
  
}

export default App
