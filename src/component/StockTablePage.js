/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Ad from '../assets/advertisment3.gif'
const StockTablePage = ({
  data,
  setData,
  isActive,
  setIsActive,
  loading,
  setLoading,
  setFilteredData,
  setIndicesData,
  filteredData,
  commodityType,
  setCommodityType,
  selectedData
}) => {
  const [activeTab, setActiveTab] = useState("all");
  const [dateTab, setDateTab] = useState("");
  const handleDateTabChange = (tabId) => {
    setDateTab(tabId);
    let d = [];
  
    data.map((v) => {
      let symbol = v.symbol;
      if (symbol.includes(tabId) && !d.includes(v)) {
        d.push(v);
      }
    });
    let sortData = d && d.sort((a, b) => b?.chp - a?.chp);
    const top10toppers = sortData.slice(0, 10);
    setFilteredData(top10toppers);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === "topper-tab") {
      if (isActive) {
        let d = [];
        data.map((v) => {
          let symbol = v.symbol;
          if (symbol.includes(dateTab) && !d.includes(v)) {
            d.push(v);
          }
        });
        let sortData = d && d.sort((a, b) => b?.chp - a?.chp);
        const top10toppers = sortData.slice(0, 10);
        setFilteredData(top10toppers);
      } else {
        let sortData = data && data.sort((a, b) => b?.chp - a?.chp);

        const top10Losers = sortData.slice(0, 10);
        setFilteredData(top10Losers);
      }
    }
    if (tabId === "all") {
      if (isActive) {
        setFilteredData(data);
      } else {

        setFilteredData(data);
      }
    }
    if (tabId === "loser-tab") {
      if (isActive) {
        let d = [];
        data.map((v) => {
          let symbol = v.symbol;
          if (symbol.includes(dateTab) && !d.includes(v)) {
            d.push(v);
          }
        });
        let sortData = d && d.sort((a, b) => a?.chp - b?.chp);
        const top10toppers = sortData.slice(0, 10);
        setFilteredData(top10toppers);
      } else {
        let sortData = data && data.sort((a, b) => a?.chp - b?.chp);

        const top10Losers = sortData.slice(0, 10);
        setFilteredData(top10Losers);
      }
    }
    if (tabId === "sameprice-tab") {
      if (isActive) {
        let d = [];
        data.map((v) => {
          let symbol = v.symbol;
          if (symbol.includes(dateTab) && !d.includes(v)) {
            d.push(v);
          }
        });
      } else {
        let sortData = data && data.filter((a) => a.open_price === a.ltp);

        const top10Losers = sortData.slice(0, 10);
        setFilteredData(top10Losers);
      }
    }
  };


  const fetchData = (value) => {
    let d = [];
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/allStockData`, { symbol: value })
      .then((res) => {
          res?.data.filter((v) => {
          let symbol = v.symbol;
          // if (symbol.includes(dateTab)) {
            d.push(v);
          // }
        });
        setFilteredData(d);
        setData(res.data)
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  const handleClick = (val, type) => {
    setCommodityType(type)
    setIsActive(val);
    setLoading(true);
    if(val === true) {
      fetchData('mcx')
    }
    else {
      fetchData('')
    }
  };

  const HandleRefreshButton = (e) => {
    let type = commodityType === 'mcx'
    e.preventDefault()
    axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/allStockData`, { symbol: type ? 'mcx': '' })
    .then((res) => {
      setData(res.data);
      setFilteredData(res.data)
      let d = []
      res.data.filter((a) => {
        if(a.symbol === "NSE:NIFTYBANK-INDEX" || a.symbol === "NSE:NIFTY50-INDEX") {
            if(!d.includes(a.symbol)) {
              d.push(a)
            }
        }
        
      })
      setIndicesData(d);
      })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    let filteredValue = []
    if(selectedData?.length !== 0) {
      const selectedvalue = selectedData.map(d => d.value)
      data.map((value) => {
        if(selectedvalue.includes(value.symbol)) {
          if(!filteredValue.includes(value.symbol)) {
            filteredValue.push(value)
          }
        }
      })
      setFilteredData(filteredValue)
    }
    else {
      setFilteredData(data)
    }
    setLoading(false)
  }, [selectedData]);

  return (
    <>
      <div className="col-12 col-lg-9">
      <a href="#" class="d-block">
          <span class="d-block text-center text-dark bg-light p-1 fs-14">Advertisment</span>
          <img src={Ad} alt="Advertisment Image" class="w-100"/>
          </a>
            <h4 className="text-center text-dark text-3xl font-bold my-4">
              Market Action
              <button onClick={HandleRefreshButton} className="btn btn-primary ml-2 text-xl pointer-cursor"
              >refresh</button>
            </h4>
              {isActive && (
            <div className="d-flex gap-3 justify-content-center justify-content-sm-start mb-2">
              <a
                href="#"
                className={`nav-link ${
                  dateTab === "23DEC" ? " text-red-500" : ""
                } filter-buttons`}
                onClick={() => handleDateTabChange("23DEC")}
              >
                23DEC
              </a>
              <a
                href="#"
                className={`nav-link ${
                  dateTab === "24JAN" ? " text-red-500" : ""
                } filter-buttons`}
                onClick={() => handleDateTabChange("24JAN")}
              >
                {" "}
                24JAN
              </a>
              <a
                href="#"
                className={`nav-link ${
                  dateTab === "24FRB" ? " text-red-500" : ""
                } filter-buttons`}
                onClick={() => handleDateTabChange("24FEB")}
              >
                24FEB
              </a>
            </div>
        )}
        <div className="flex justify-center space-x-5 item-center my-3">
        <div className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              commodityType === "mcx" ? "underline text-blue-500" : ""
            }`}
            id="pills-aside-tab"
            // data-bs-toggle="pill"
            // data-bs-target="#pills-aside"
            type="button"
            role="tab"
            // aria-controls="pills-aside"/
            // aria-selected="false"
            onClick={() => handleClick(true, 'mcx')}
          >
            MCX
          </button>
        </div>
        <div className="nav-item" role="presentation">
          <button
             className={`nav-link ${
              commodityType === "nifty50" ? "underline text-blue-500" : ""
            }`}
            id='pills-aside-tab'
            role="tab"
            onClick={() => handleClick(false, 'nifty50')}
          >
            Nifty 50
          </button>
        </div>
        </div>
        <ul
          className="nav nav-pills  justify-content-center mb-3 market-action-tab-ul"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                activeTab === "all" ? "active" : ""
              }`}
              onClick={() => handleTabChange("all")}
            >
              All
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                activeTab === "topper-tab" ? "active" : ""
              }`}
              onClick={() => handleTabChange("topper-tab")}
            >
              Top gainers
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                activeTab === "loser-tab" ? "active" : ""
              }`}
              onClick={() => handleTabChange("loser-tab")}
            >
              Top losers
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                activeTab === "sameprice-tab" ? "active" : ""
              }`}
              onClick={() => handleTabChange("sameprice-tab")}
            >
              Same open & low
            </button>
          </li>
        </ul>

        {filteredData && filteredData?.length > 0 ? (
          <>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-symbol"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="table-responsive ">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Symbol</th>
                        <th scope="col">LTP</th>
                        <th scope="col">Prev Close Price</th>
                        <th scope="col">High Price</th>
                        <th scope="col">Low Price</th>
                        <th scope="col">Open Price</th>
                        <th scope="col">CH</th>
                        <th scope="col">CHP</th>
                        <th scope="col">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? <Spinner /> : 
                        filteredData &&
                        filteredData.map((symbols) => (
                          <tr>
                            <td>{symbols?.symbol}</td>
                            <td>{symbols?.ltp}</td>
                            <td>{symbols?.prev_close_price}</td>
                            <td>{symbols?.high_price}</td>
                            <td>{symbols?.low_price}</td>
                            <td>{symbols?.open_price}</td>
                            <td>{symbols?.ch}</td>
                            <td>{symbols?.chp}</td>
                            <td>{symbols?.type}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                ...
              </div>
            </div>
          </>
        ) : (
          <h1 className="text-3xl text-red-500 mt-10 text-center">Not Found</h1>
        )}
      </div>
    </>
  );
};

export default StockTablePage;
