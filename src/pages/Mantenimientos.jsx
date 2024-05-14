import Header from "../components/Header/Header"
import Navigation from "../components/Sidebar/Navigation"

const Mantenimientos = () => {
  return (
    <>
      <div className="flex h-screen dark:bg-[#090e16] bg-whiten">
        <Navigation />
        <div className="w-full mx-5">
          <Header titulo="Mantenimiento" />
        </div>
      </div>
    </>
  );
}

export default Mantenimientos