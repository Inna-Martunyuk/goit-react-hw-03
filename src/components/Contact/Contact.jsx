import { IoPerson, IoCallSharp } from "react-icons/io5";
import css from "./Contact.module.css"
function Contact({ contact, onDelete }) {
  const { id, name, number } = contact;
  return (
    <div className={css.contactDiv}>
      <div className={css.container}>
        <div className={css.containerName}>
          <IoPerson />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.containerNumber}>
          <IoCallSharp />
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <button className={css.btn} type="buttom" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
export default Contact;
