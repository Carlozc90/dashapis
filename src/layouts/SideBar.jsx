const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="SideBar__Container">
        <button className="SideBar__Container--Boton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-home-2"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <rect x="10" y="12" width="4" height="4" />
          </svg>
          <p className="Sidebar__P">dashboard</p>
        </button>

        <button>Dahsborad</button>
      </div>
    </div>
  );
};

export default SideBar;
