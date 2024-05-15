import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Acciones = () => {
  return (
    <>
      <button className="text-yellow-400 text-xl mx-2">
        <MdEdit />
      </button>
      <button className="text-red-500 text-xl">
        <MdDelete />
      </button>
    </>
  );
};

export default Acciones;
