import Header from '../components/Header/Header';
import Navigation from '../components/Navbar/Navigation'

const Dashboard = () => {
  return (
    <>
      <div className='flex'>
        <Navigation />
        <div style={{ minHeight: "1155.41px" }}>
          <Header titulo="Dashboard"/>
        </div>
      </div>
    </>
  );
}

export default Dashboard