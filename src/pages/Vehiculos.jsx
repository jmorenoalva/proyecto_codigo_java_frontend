import Header from "../components/Header/Header"
import Navigation from "../components/Navbar/Navigation"

const Vehiculos = () => {
  return (
    <>
      <div className="flex">
        <Navigation/>
        <div style={{minHeight:"1155.41px"}}>
          <Header titulo="Vehiculos"/>
        </div>
      </div>
    </>
  )
}

export default Vehiculos