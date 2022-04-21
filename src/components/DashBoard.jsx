import Image from "next/image";
import useApis from "../hooks/useApis";

const DashBoard = () => {
  const { obj } = useApis();
  return (
    <div className="DashBoard">
      {obj.map((items, i) => (
        <div key={i} className="DashBoard__Card">
          <h4>{items.titulo}</h4>
          <Image
            src={items.img}
            width={150}
            height={150}
            alt={`imagen ${items.titulo}`}
          />
        </div>
      ))}
    </div>
  );
};

export default DashBoard;
