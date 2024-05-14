import Header from "../components/Header/Header"
import Navigation from "../components/Sidebar/Navigation"

const Vehiculos = () => {
  return (
    <>
      <div className="flex h-screen dark:bg-[#090e16] bg-white">
        <Navigation />
        <div className="w-full mx-5">
          <Header titulo="Vehiculos" />
        </div>
      </div>
    </>
  );
}

export default Vehiculos