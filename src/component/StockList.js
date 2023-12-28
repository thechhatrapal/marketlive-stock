// StockList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import StockListCard from "./StockListCard";

const StockList = () => {
  const [stockSymbols, setStockSymbols] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [comapnyName, setComapnyName] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all stock symbols
        const symbolsResponse = await axios.get(
          "https://finnhub.io/api/v1/stock/symbol",
          {
            params: {
              exchange: "US", // or 'all' for all exchanges
              token: "clmm5o1r01qjj8i8mki0clmm5o1r01qjj8i8mkig",
            },
          }
        );

        // Extract stock symbols from the response
        let symbols = symbolsResponse.data.map(
          (symbolData) => symbolData.symbol
        );
        symbols = symbols.splice(0, 10);



        setStockSymbols(symbols);

        // Fetch company data for each symbol
        const companyDataPromises = symbols.map((symbol) =>
          axios.get(`https://finnhub.io/api/v1/stock/profile2`, {
            params: {
              symbol,
              token: "clmm5o1r01qjj8i8mki0clmm5o1r01qjj8i8mkig",
            },
          })
        );
          
        const prices = symbols.map((symbol) =>
          axios.get(`https://finnhub.io/api/v1/quote`, {
            params: {
              symbol,
              token: "clmm5o1r01qjj8i8mki0clmm5o1r01qjj8i8mkig",
            },
          })
        );

        const companyDataResponses = await Promise.all(companyDataPromises);
        let price = await Promise.all(prices);

        const companies = companyDataResponses.map((response) => response.data);

        const companiesName = companies.map((c) => c.name)
        price = companiesName && price.map((p, index) => {
            p = {...p.data}
            console.log(p)
            return {...p, name: companiesName[index]}
        })
        console.log('price', price)
        setCompanyData(companies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <h1 className="font-bold text-2xl my-5 text-center">Stock List</h1>
      <div className="flex justify-between flex-wrap items-center">
        {companyData &&
          companyData.map((company) => (
            <>
              {company?.name && (
                <div className="flex">
                  <StockListCard company={company} />
                </div>
              )}
            </>
          ))}
      </div>
    </>
  );
};

export default StockList;
