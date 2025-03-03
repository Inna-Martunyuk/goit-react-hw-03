import Contact from "../Contact/Contact";


function ContactList({ contacts, onClick }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
