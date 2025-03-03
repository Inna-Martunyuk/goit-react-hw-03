import { IoPerson, IoCallSharp } from "react-icons/io5";
function Contact({ contact, onClick }) {
  const { id, name, number } = contact;
  return (
    <>
      <div>
        <div>
          <IoPerson />
          <p>{name}</p>
        </div>
        <div>
          <IoCallSharp />
          <p>{number}</p>
        </div>
      </div>
      <button onClick={() => onClick(id)}>Delete</button>
    </>
  );
}
export default Contact;
