import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./ContactForm.module.css";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || phoneNumber.trim() === "") {
      toast.error("Name and phone number are required.");
    } else {
      dispatch(addContact({ name, phoneNumber }));
      setName("");
      setPhoneNumber("");
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className={css.input}
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactsForm;
