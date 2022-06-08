import React, { useState, useEffect } from "react";
import './Dashboard.css'
import {stockData} from "../../stockData";  // importing data for creating chart
import StockChart from "./Stockchart";
import orderBook from "../orderBook";


const Dashboard = () => {
  const [chartsToDisplay, setChartsToDisplay] = useState([]);

  const getData = async () => {
    const charts = [];
    charts.push(<StockChart key={1} data={stockData} />);
    setChartsToDisplay(charts);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
  <div className="Dashboard">
   {/* OrderBook table */}
    <table className="OrderBook">
      <tr className="tradedprice">
        <th colSpan={2}>
          0.45678 USD
          <h6>Last traded price</h6>
        </th>
        <th>
          +4.25%
          <h6>20th price</h6>
        </th>
        <th>
          104,114,052 ADA
          <h6>20th volume</h6>
        </th>
      </tr>
      <tr className="OrderBookTitle">
        <th colSpan={3}>Order Book</th>
        <th>Price Chart</th>
        <th colSpan={3}>Trade History</th>
      </tr>
      <tr className="OrderBookSubhead">
        <th>Market Price</th>
        <th>Price (USD)</th>
        <th>My Size</th>

        <td rowSpan={0}>
          {chartsToDisplay} {/* Chart diplay by this row */}
        </td>

        <th>Trade Size</th>
        <th>Price (USD)</th>
        <th>Time</th>
      </tr>
      {orderBook.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.marketSize}</td>
              <td className="priceGrp1">{val.price}</td>
              <td>{val.mySize}</td>
            </tr>
          )
        })}
      <tr>
        <th>USD Spread</th>
        <th>0.0004</th>
        <th></th>
      </tr>
      {orderBook.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.marketSize}</td>
              <td className="priceGrp2">{val.price}</td>
              <td>{val.mySize}</td>
            </tr>
          )
        })}
      <tr>
        <th>Agregation</th>
        <th>0.0001</th>
        <th></th>
      </tr>
    </table>

  </div>
  
  );
};

export default Dashboard;