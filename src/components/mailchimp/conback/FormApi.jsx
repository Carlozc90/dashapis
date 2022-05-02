import { useState } from "react";
import useApis from "../../../hooks/useApis";

const FormApi = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { mensaje, setMensaje } = useApis();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.length) {
      console.log("Error");
      return;
    }

    console.log("click");
    let fetchData = {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    };

    setLoading(true);
    setMensaje("");
    await fetch("http://localhost:5000/subscribe", fetchData).then((res) => {
      if (res.ok) {
        console.log("yay it worked", res);
        setMensaje("Gracias Por Subscribirte");
      } else {
        console.log(" fecth error", res);
        if (res.status === 404) {
          setMensaje("Error Email Registrado");
        }
      }
    });
    setLoading(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="Info__Suscribe ">
        <h3>MailChimp con API REST NodeJs</h3>
        <label>Subscribe to NewsLetter</label>
        <input
          onChange={(event) => setEmail(event?.target?.value ?? "")}
          type="email"
          placeholder="Your email"
          // required
          // pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
        />

        <button>Submit</button>
        {loading && <div>Cargando</div>}
        {mensaje && <div> {mensaje}</div>}
      </form>
    </>
  );
};

export default FormApi;
