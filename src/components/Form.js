import { useContext, useState } from "react";
import { UserContext } from "../Provider";

const Form = () => {
  const [text, setText] = useState("");
  const [message,setMessage] = useState(false);

  const { users, getUser, handleClear } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== "") {
      getUser(text);
      handleClear();
      event.target[0].value = "";
    } else {
      event.target[0].value = "";
      setMessage(true);
      setTimeout(() => {
        setMessage(false)
      }, 2000);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {message && (
        <div className="message">
          <i className="fas fa-exclamation-circle"></i>
          <p>please enter a name</p>
        </div>
      )}
      <input
        type="text"
        onChange={(event) => setText(event.target.value)}
        placeholder="Search Users..."
      />
      <button className="submitButton">submit</button>
      {users.length > 0 && (
        <button type="button" onClick={handleClear} className="clearButton">
          clear
        </button>
      )}
    </form>
  );
};

export default Form;
