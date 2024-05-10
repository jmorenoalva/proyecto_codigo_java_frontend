
const Header = (props) => {
  return (
    <>
      <section className="content-header section">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>{props.titulo}</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header