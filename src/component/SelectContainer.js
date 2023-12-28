import React from "react";
import { SymbolOptions } from "../common/Symbols";

function SelectContainer() {
  return (
    <>
       <section className="container">
      <h4 className="heading">Select Indices</h4>
      <p className="desc">Choose upto 5 indices that you would like to view the market trend for.</p>
      <div className="table-container">
        <div className="table-row">
          <div className="row-item checkbox-heading">Category 1</div>
          <div className="row-item">
            <form className="d-flex align-items-center gap-1">
                <input type="checkbox" id="item1" name="item1" checked/>
                <label for="item1">NIFTY 50</label>
            </form>
          </div>
        </div>
        <div className="table-row">
          <div className="row-item checkbox-heading">Category 2</div>
          <div className="row-item">
            <form className="d-flex align-items-center gap-1">
              <input type="checkbox" id="item4" name="item4"/>
              <label for="item4">NIFTY 50</label>
            </form>
          </div>
          <div className="row-item">
            <form className="d-flex align-items-center gap-1">
              <input type="checkbox" id="item5" name="item5"/>
              <label for="item5">NIFTY 50</label>
            </form>
          </div>
          <div className="row-item">
            <form className="d-flex align-items-center gap-1">
              <input type="checkbox" id="item6" name="item6"/>
              <label for="item6">NIFTY 50</label>
            </form>
          </div>
        </div>
        <div className="table-row">
          <div className="row-item checkbox-heading">Category 3</div>
          <div className="row-item">
            <form className="d-flex align-items-center gap-1">
              <input type="checkbox" id="item7" name="item7"/>
              <label for="item7">NIFTY 50</label>
            </form>
          </div>
          <div className="row-item">
            <form className="d-flex align-items-center gap-1">
              <input type="checkbox" id="item8" name="item8"/>
              <label for="item8">NIFTY 50</label>
            </form>
          </div>
          <div className="row-item">
            <form className="d-flex align-items-center gap-1">
              <input type="checkbox" id="item9" name="item9"/>
              <label for="item9">NIFTY 50</label>
            </form>
          </div>
        </div>
        <div className="table-row">
          <div className="row-item checkbox-heading">Category 4</div>
          <div className="row-item">
            <form className="d-flex align-items-center gap-1">
              <input type="checkbox" id="item10" name="item10"/>
              <label for="item10">NIFTY 50</label>
            </form>
          </div>
          <div className="row-item">
            <form className="d-flex align-items-center gap-1">
              <input type="checkbox" id="item11" name="item11"/>
              <label for="item11">NIFTY 50</label>
            </form>
          </div>
          <div className="row-item">
            <form className="d-flex align-items-center gap-1">
              <input type="checkbox" id="item12" name="item12"/>
              <label for="item12">NIFTY 50</label>
            </form>
          </div>
        </div>
      </div>
    </section>
      {/* <section className="container">
        <h4 className="heading">Select Indices</h4>
        <p className="desc">
          Choose upto 5 indices that you would like to view the market trend
          for.
        </p>
        <div className="multiselect-table">
          <table className="content-table">
            <thead>
                <th>Broad Market Indices</th>
                <th>Sectoral Indices</th>
                <th>Strategy Indices</th>
                <th>Thematic Indices</th>
            </thead>
            <tbody>
              {SymbolOptions.map((symbol) => {
                  return (
                    <tr>
                      <td>
                          <input
                            type="checkbox"
                            id="item3"
                            name="item3"
                            checked
                          />
                          <label for="item3"> NIFTY BANK</label>
                      </td>
            </tr>
                );
            })}
            </tbody>
          </table>
        </div>
      </section> */}
    </>
  );
}

export default SelectContainer;
