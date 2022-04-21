import { useContext } from "react";
import ApisContext from "../context/ApisProvider";

const useApis = () => {
  return useContext(ApisContext);
};

export default useApis;
