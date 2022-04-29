import useApis from "../hooks/useApis";

const Modal = ({ setModal, modal }) => {
  const { setApis } = useApis();
  return (
    <div className="Modal">
      <button
        onClick={() => {
          setModal(!modal);
        }}
        type="botton"
        className="botton overlay__boton--X"
      >
        X
      </button>
      <div className="overlay__container">
        <button
          onClick={() => {
            setModal(!modal);
            setApis("home");
          }}
          className="botton overlay__boton"
        >
          Home
        </button>

        <button
          onClick={() => {
            setModal(!modal);
            setApis("dash");
          }}
          className="botton overlay__boton"
        >
          Dashboard
        </button>

        <button
          onClick={() => {
            setModal(!modal);
            setApis("info");
          }}
          className="botton overlay__boton"
        >
          Info
        </button>
      </div>
    </div>
  );
};

export default Modal;
