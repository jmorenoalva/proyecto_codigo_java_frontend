import Header from "../components/Header/Header"
import Navigation from "../components/Sidebar/Navigation"
import Cabecera from "../components/Vehiculos/Cabecera";
import Tabla from "../components/Vehiculos/Tabla";

const Vehiculos = () => {
  return (
    <>
      <div className="flex h-screen dark:bg-[#090e16] bg-white">
        <Navigation />
        <div className="w-full mx-5">
          <Header titulo="Vehiculos" />

          <section className="text-tremor-default dark:text-dark-tremor-content dark:bg-[#111827] bg-white p-8">
            <Cabecera />
          </section>

          <section className="text-tremor-default dark:text-dark-tremor-content dark:bg-[#111827] bg-white p-8">
            <Tabla />
          </section>
        </div>
      </div>
    </>
  );
}

export default Vehiculos