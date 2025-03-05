import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"


function ContactList({ contacts, onClick, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onClick={onClick} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
