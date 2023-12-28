/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { SymbolOptions, CommoditySymbol } from "../common/Symbols";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

function AdminDashboard() {
  const [selectedData, setSelectedData] = useState([]);
  const [newSymbol, setNewSymbol] = useState();
  const Navigate = useNavigate();

  const handleSelect = (option) => {
    setSelectedData(option);
  };

  const handleChange = (e) => {
    setNewSymbol(e.target.value);
  };

  const AddSymbol = (e) => {
    e.preventDefault();
    CommoditySymbol = [
      ...CommoditySymbol,
      { label: newSymbol, value: newSymbol },
    ];
  };

  const options = [
    { label: "NIFTY50", value: "NIFTY50" },
    { label: "MCX", value: "MCX" },
  ];
  return (
    <>
      <div className="container my-5">
        <AdminNavbar/>
        <div className="my-5">
        <button
          className="btn btn-primary"
          onClick={() => Navigate("/admin/addblog")}
        >
          Add blog
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={() => Navigate("/admin/newauthgenerate")}
        >
          Generate auth
        </button>{" "}
        </div>
        <h1 className="my-3 text-3xl font-bold text-center">
          Select community Symbol{" "}
        </h1>
        <Select
          closeMenuOnSelect={false}
          defaultValue={""}
          isMulti
          options={options}
          onChange={handleSelect}
        />
        <div className="row">
          {selectedData &&
            selectedData.map(
              (val) =>
                val.label === "MCX" &&
                CommoditySymbol.map((symbol) => (
                  <div key={symbol.value} className="col-md-4 mb-3">
                    <div className="card">
                      <div className="card-body">
                        <label>{symbol.label}</label>
                        <input
                          name={symbol.label}
                          type="checkbox"
                          onChange={(e) => console.log(e)}
                        />
                      </div>
                    </div>
                  </div>
                ))
            )}
          {selectedData &&
            selectedData.map(
              (val) =>
                val.label === "NIFTY50" &&
                SymbolOptions.map((symbol) => (
                  <>
                    <div key={symbol.value} className="col-md-4 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <label>{symbol.label}</label>
                          <input name={symbol.label} type="checkbox" />
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                ))
            )}
        </div>
        {selectedData.length > 0 && (
          <div className="flex">
            <input
              name="name"
              placeholder="Enter the symbol you want to add"
              onChange={handleChange}
            />
            <button className="mx-2 w-20" onClick={AddSymbol}>
              Add
            </button>
          </div>
        )}
      </div>
      <div className="w-20 mx-auto">
        <button type="button" className="btn btn-success text-black font-bold  w-20 mx-auto mb-4">
          Apply
        </button>
      </div>
      {/* <button type="button" class="btn btn-primary">Publish</button> */}
    </>
  );
}

export default AdminDashboard;
