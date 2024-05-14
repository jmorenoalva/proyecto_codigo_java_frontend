import { LuChevronFirst } from "react-icons/lu";
import { LuChevronLast } from "react-icons/lu";
import { FaPowerOff } from "react-icons/fa";
import NavigationItems from "./Sidebar-item/NavigationItems";
import car from "./coche.png";
import { createContext, useState } from "react";

const SidebarContext = createContext();

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="flex dark:bg-[#111827] bg-white">
        <aside className="h-screen">
          <nav className="h-full flex flex-col dark:border-[#111827] border-r shadow-sm">
            <div className="p-4 pb-2 flex justify-between items-center">
              <img
                src={car}
                className={`overflow-hidden transition-all ${
                  expanded ? "w-10" : "w-0"
                }`}
              />
              <h2
                className={`overflow-hidden transition-all ${
                  expanded
                    ? "font-bold text-lg p-4 text-center dark:text-white text-black"
                    : "w-0"
                }`}
              >
                Alquiler de autos
              </h2>
              <button
                onClick={() => setExpanded((curr) => !curr)}
                className="p-1.5 rounded-lg dark:bg-[#6a7280] bg-gray-50 hover:bg-gray-100"
              >
                {expanded ? (
                  <LuChevronFirst className="ml-1 w-6 h-6" />
                ) : (
                  <LuChevronLast className="ml-1 w-6 h-6" />
                )}
              </button>
            </div>

            <SidebarContext.Provider value={expanded}>
              <ul className="flex-1 px-3">
                <NavigationItems expanded={expanded} />
              </ul>
            </SidebarContext.Provider>

            <div className="dark:border-[#111827] border-t flex p-3">
              <img
                src="https://ui-avatars.com/api/?name=J+M&background=c7d2fe&color=3730a3&bold=true"
                className="w-12 h-12 rounded-md ml-2"
                alt=""
              />
              <div
                className={`flex justify-between items-center overflow-hidden transition-all ${
                  expanded ? "w-52 ml-3" : "w-0"
                } `}
              >
                <div className="leading-4">
                  <h4 className="font-semibold dark:text-white text-black">
                    AE
                  </h4>
                  <span className="text-xs text-gray-600">Administrador</span>
                </div>
                <button className="p-1.5 rounded-lg dark:bg-[#6a7280] bg-gray-50">
                  <FaPowerOff size={20} />
                </button>
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Navigation;
