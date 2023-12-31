/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from "axios";
import StockTablePage from "./StockTablePage";
import NavbarPage from "../pages/NavbarPage";
import TopFiveBroker from "./TopFiveBroker";
import Advertise from "./Advertise";
import GlobalMarkets from "./GlobalMarket";
import TopFiveBrokers from "./TopFiveBrokers";
import io from "socket.io-client";
import MarqueeBar from "./MarqueeBar";
import CompanyAdvertise from "./CompanyAdvertise";
import BlogListing from "./BlogsLsiting";
import SymbolSelect from "./SymbolSelect";

function Dashboard() {
  const [data, setData] = useState();
  const [stockData, setStockData] = useState();
  const [indicesdata, setIndicesData] = useState();
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState();
  const [commodityType, setCommodityType] = useState('mcx')
  const [selectedData, setSelectedData] = useState([]);
  const [outTime, setOutTime] = useState(false)


  var socket = io(`${process.env.REACT_APP_BACKEND_URL}`);
  const intervalInMilliseconds = 24 * 60 * 60 * 1000;


  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/token/authorization`).then(res => {
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/setfiresData`, {token: res.data}).then(res => console.log(res))
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/allStockData`, { symbol: "mcx", token: res.data })
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data)
        let d = []
        res.data.filter((a) => {
          if((a.symbol === "NSE:NIFTYBANK-INDEX" )|| (a.symbol === "NSE:NIFTY50-INDEX")) {
              if(!d.includes(a.symbol)) {
                d.push(a)
              }
          }
        })
        setIndicesData(d);
        })
      .catch((err) => console.log(err));
    })
    return () => {
      socket.disconnect();
    };
  }, [outTime]);

  return (
      <div>
        <header className="header">
          <MarqueeBar data={data} />
        </header>
        <NavbarPage />
        <TopFiveBroker indicesdata={indicesdata} />
        <CompanyAdvertise />
        <div className="container">
        <div className="container w-[50%] align-left">
        </div>
          <div className="row">
            {data && (
              <StockTablePage
                isActive={isActive}
                setCommodityType={setCommodityType}
                commodityType={commodityType}
                data={data}
                isMulti
                stockData={stockData}
                filteredData={filteredData}
                setIndicesData={setIndicesData}
                setFilteredData={setFilteredData}
                loading={loading}
                selectedData={selectedData}
                setData={setData}
                setIsActive={setIsActive}
                setLoading={setLoading}
              />
            )}
            <Advertise />
          </div>
        </div>
        <GlobalMarkets />
        <TopFiveBrokers />
        {/* <BlogListing /> */}
      </div>
  );
}

export default Dashboard;
