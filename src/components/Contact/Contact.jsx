import { IoPerson, IoCallSharp } from "react-icons/io5";
import css from "./Contact.module.css"
function Contact({ contact, onDelete }) {
  const { id, name, number } = contact;
  return (
    <>
      <div className={css.container}>
        <div className={css.name}>
          <IoPerson />
          <p>{name}</p>
        </div>
        <div className={css.number}>
          <IoCallSharp />
          <p>{number}</p>
        </div>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
}
export default Contact;
