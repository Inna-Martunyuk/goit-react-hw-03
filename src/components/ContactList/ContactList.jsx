import Contact from "../Contact/Contact";


function ContactList({ contacts, onClick, onDelete }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onClick={onClick} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
