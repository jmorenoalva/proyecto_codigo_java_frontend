
const Header = (props) => {
  return (
    <>
      <section className="content-header section mb-10 mt-5 dark:text-white text-black">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
                {props.titulo}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header