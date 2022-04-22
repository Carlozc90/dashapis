import useApis from "../hooks/useApis";

const SideBar = () => {
  const { setApis, apis, obj } = useApis();
  return (
    <div className="SideBar">
      <div className={`SideBar__Container `}>
        {obj.map((items) => {})}
        <button
          onClick={() => {
            setApis("home");
          }}
          className={`SideBar__Container--Boton ${
            apis === "home" && "Sidebar__Container-bg"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-home-2"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#121010"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <rect x="10" y="12" width="4" height="4" />
          </svg>
          <p className="Sidebar__P">HOME</p>
        </button>
        <button
          onClick={() => {
            setApis("dash");
          }}
          className={`SideBar__Container--Boton ${
            apis === "dash" && "Sidebar__Container-bg"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-apps"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#121010"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="6" height="6" rx="1" />
            <rect x="4" y="14" width="6" height="6" rx="1" />
            <rect x="14" y="14" width="6" height="6" rx="1" />
            <line x1="14" y1="7" x2="20" y2="7" />
            <line x1="17" y1="4" x2="17" y2="10" />
          </svg>
          <p className="Sidebar__P">dashboard</p>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
