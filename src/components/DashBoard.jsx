import Image from "next/image";
import useApis from "../hooks/useApis";

const DashBoard = () => {
  const { setApis, obj } = useApis();
  return (
    <div className="DashBoard">
      {obj.map((items, i) => (
        <button
          onClick={() => {
            setApis(items.id);
          }}
          key={i}
          className="DashBoard__Card"
        >
          <p className="DashBoard__Parrafo">{items.titulo}</p>
          <div className="DashBoard__Card--img">
            <Image
              src={items.img}
              layout="fill"
              alt={`imagen ${items.titulo}`}
              className="DashBoard__Imagen"
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default DashBoard;
