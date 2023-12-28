import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";

const StockTable = ({data}) => {
  const [activeTab, setActiveTab] = useState("+");

  // const getData = (selectedTab) => {
  //   axios
  //   .get(
  //     `https://financialmodelingprep.com/api/v3/stock_market/${selectedTab}?apikey=Xm1sM8qhXWZDBMBjksVqDcJfmIkJLrHz`
  //   )
  //   .then((res) => setData(res.data))
  //   .catch((err) => console.log(err));
  // } 
  // useEffect(() => {
  //   axios
  //   .get("https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=Xm1sM8qhXWZDBMBjksVqDcJfmIkJLrHz")
  //   .then((res) => setData(res.data))
  //   .catch((err) => console.log(err));
  // }, [])

  // const handleTabChange = (selectedTab) => {
  //   setData('')
  //   setActiveTab(selectedTab);
  //   getData(selectedTab)
  // };

  return (
    <>
         {data &&  
          (<table width={100} className="mt-5 w-full">
            <thead>
              <th>Symbol</th>
              <th>Company</th>
              <th>high_price</th>
              <th>bid_size</th>
              <th>open_price</th>
            </thead>
            <tbody>
            {data ? (
                data.map((company) => {
                  return (
                    <>
                      <tr>
                        <td>{company.symbol}</td>
                        <td className="text-green-400">{company.symbol}</td>
                        <td className="text-green-400">{company.high_price}</td>
                        <td>{company.bid_size}</td>
                        <td>{company.open_price}</td>
                      </tr>
                    </>
                  );
                })
              ) : (
                <>
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </>
              )}
            </tbody>
          </table>
          )}
          </>
  )
}

export default StockTable;
