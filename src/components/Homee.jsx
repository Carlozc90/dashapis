import Image from "next/image";
import useApis from "../hooks/useApis";

const Homee = () => {
  const { setApis } = useApis();
  return (
    <div className="Home">
      <div className="Home__Container">
        <div className="Home__Izquierda">
          <h1>
            {" "}
            Bienvenido ah mi compilador de <span>Peticion de Apis.</span>{" "}
          </h1>
          <p>
            En esta web podras interactuar de forma dinamica con{" "}
            <span>diferentes Apis.</span>
          </p>
        </div>
        <div className="Home__Derecho">
          <div
            onClick={() => {
              setApis("dash");
            }}
            className="Home__Derecho--Grid"
          >
            {["coin", "weather", "news", "cocktail", "pokemon"].map(
              (items, i) => (
                <div className="Home__imagen" key={i}>
                  <Image
                    src={`/assets/icon/${items}.png`}
                    width={900}
                    height={900}
                    alt="imagen crypto"
                  />
                </div>
              )
            )}
          </div>
          <div className="Home__Descripcion">
            <p>Contáctame si quieres que trabajemos juntos.</p>
            <div className="Home__Link">
              <a
                href="https://github.com/Carlozc90"
                target="_blank"
                rel="noreferrer"
                className="mt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-github"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-cancines"
                target="_blank"
                rel="noreferrer"
                className="mt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-linkedin"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <line x1="8" y1="11" x2="8" y2="16" />
                  <line x1="8" y1="8" x2="8" y2="8.01" />
                  <line x1="12" y1="16" x2="12" y2="11" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </a>
            </div>
            <div className="Home__copy">
              <p>Copyright © 2022.</p>
              <p>@Carlozc90 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homee;
