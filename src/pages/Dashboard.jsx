import { CardUser } from '../components/Dashboard/CardUser';
import { CardVehiculos } from '../components/Dashboard/CardVehiculos';
import { CardReservas } from '../components/Dashboard/CardReservas'
import Header from '../components/Header/Header';
import Navigation from '../components/Sidebar/Navigation';
import { CardTotal } from '../components/Dashboard/CardTotal';
import { CardBarChart } from '../components/Dashboard/CardBarChart';
import { CardDonutChart } from '../components/Dashboard/CardDonutChart';
import { Card } from '@tremor/react';
import { CardLineChart } from '../components/Dashboard/CardLineChart';
import { CardDonutChartPie } from '../components/Dashboard/CardDonutChartPie';

const Dashboard = () => {
  return (
    <>
      <div className="flex h-screen dark:bg-[#090e16] bg-white">
        <Navigation />
        {/* <div style={{minHeight:"1155.41px"}}> */}
        <div className="w-full mx-5">
          <Header titulo="Dashboard" />
          <section className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="pe-4">
              <CardUser />
            </div>
            <div className="pe-4">
              <CardVehiculos />
            </div>
            <div className="pe-4">
              <CardReservas />
            </div>
            <div className="pe-4">
              <CardTotal />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
            <div className="p-2">
              <Card className="h-full">
                <CardBarChart />
              </Card>
            </div>
            <div className=" p-2">
              <Card className="h-full flex justify-center items-center">
                <CardDonutChart />
              </Card>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-8">
            <div className="col-span-2 p-2">
              <Card className="h-full">
                <CardLineChart />
              </Card>
            </div>
            <div className="col-span-2 p-2">
              <Card className="h-full">
                <CardDonutChartPie />
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Dashboard