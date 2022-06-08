import './App.css';
import Dashboard from './components/Chart Dashboard/Dashboard';
import Order from './components/Order';
import Topbar from './components/Topbar';

function App() {
  return (
   <>
     <Topbar />    {/* This will be the header compnent of the website */}
     <Order />     {/* Order is the component which is use to buy/sell the stocks
                        , means it let the the user to complete an order. As this is 
                        clone website this is not functionally working. It is located at
                        left side of website like sidebar */}
     <Dashboard />  {/* Dashboard is the center part of the website which displays
                        stocks data and chart using that that data */}
   </>
  );
}

export default App;
