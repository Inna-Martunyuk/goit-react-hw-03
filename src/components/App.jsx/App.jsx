import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { IoPerson, IoCallSharp } from "react-icons/io5";
import viteLogo from '/vite.svg'
import './App.css'
import ContactList from "../ContactList/ContactList"
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from "../ContactForm/ContactForm"

function App() {
  const [contacts, setContacts] = useState([
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ])
  const [filter, setFilter] = useState("");

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} />
    </>
  );
}

export default App;
