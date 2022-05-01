import { useState } from "react";

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  console.log(status);

  const handleFormSubmit = (e) => {
    e?.preventDefault();
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  const handleInputKeyEvent = (e) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (e.keyCode === 13) {
      e.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  return (
    <form>
      <label>Subscribe to NewsLetter</label>
      <input
        onChange={(event) => setEmail(event?.target?.value ?? "")}
        type="email"
        placeholder="Your email"
        onKeyUp={(e) => handleInputKeyEvent(e)}
      />

      <button onClick={handleFormSubmit}>Submit</button>

      <div>
        {"sending" === status ? <p>cargando</p> : null}
        {"error" === status || error ? <p>Error</p> : null}
        {"success" === status && "error" !== status && !error && (
          <p>Gracias Por Suscribirse</p>
        )}
      </div>
    </form>
  );
};

export default NewsletterForm;
