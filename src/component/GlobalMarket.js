import React from "react";

function TopFiveBrokers() {
  return (
    <section className="global-market-section container" id="globalMarketSection">
      <h3 className="text-center text-dark mt-4 mb-4 pb-2 text-2xl font-bold">Global Market</h3>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <h6 className="fw-700 text-dark mb-3">US Indices</h6>
          <div className="indices-content-wrap bor-success px-3 py-2 mb-3">
            <div className="d-flex justify-content-between mb-1">
              <span className="indices-name fw-700 text-light-black">S&P 500</span>
              <span className="indices-value fw-500 text-light-black">4699.69</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="status-badge text-white bg-danger">Close</span>
              <p className="mb-0">
                <span className="color-green">55.99 (1.21%)</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-up"
                  className="svg-inline--fa fa-caret-up fa-w-10 color-green"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width="20"
                  height="20"
                >
                  <path
                    fill="currentColor"
                    d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                  ></path>
                </svg>
              </p>
            </div>
          </div>
          <div className="indices-content-wrap bor-danger px-3 py-2 mb-3">
            <div className="d-flex justify-content-between mb-1">
              <span className="indices-name fw-700 text-light-black">
                DOW JONES FUTURES
              </span>
              <span className="indices-value fw-500 text-light-black">
                37166.90
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="status-badge text-white bg-danger">Close</span>
              <p className="mb-0">
                <span className="text-danger">-12.33 (-0.16%)</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="svg-inline--fa fa-caret-down fa-w-10 text-danger"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width="20"
                  height="20"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </p>
            </div>
          </div>
          <div className="indices-content-wrap bor-success px-3 py-2 mb-3">
            <div className="d-flex justify-content-between mb-1">
              <span className="indices-name fw-700 text-light-black">S&P 500</span>
              <span className="indices-value fw-500 text-light-black">4699.69</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="status-badge text-white bg-success">Open</span>
              <p className="mb-0">
                <span className="color-green">55.99 (1.21%)</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-up"
                  className="svg-inline--fa fa-caret-up fa-w-10 color-green"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width="20"
                  height="20"
                >
                  <path
                    fill="currentColor"
                    d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                  ></path>
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <h6 className="fw-700 text-dark mb-3">European Indices</h6>
          <div className="indices-content-wrap bor-danger px-3 py-2 mb-3">
            <div className="d-flex justify-content-between mb-1">
              <span className="indices-name fw-700 text-light-black">
                DOW JONES FUTURES
              </span>
              <span className="indices-value fw-500 text-light-black">
                37166.90
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="status-badge text-white bg-danger">Close</span>
              <p className="mb-0">
                <span className="text-danger">-12.33 (-0.16%)</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="svg-inline--fa fa-caret-down fa-w-10 text-danger"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width="20"
                  height="20"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </p>
            </div>
          </div>
          <div className="indices-content-wrap bor-success px-3 py-2 mb-3">
            <div className="d-flex justify-content-between mb-1">
              <span className="indices-name fw-700 text-light-black">S&P 500</span>
              <span className="indices-value fw-500 text-light-black">4699.69</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="status-badge text-white bg-danger">Close</span>
              <p className="mb-0">
                <span className="color-green">55.99 (1.21%)</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-up"
                  className="svg-inline--fa fa-caret-up fa-w-10 color-green"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width="20"
                  height="20"
                >
                  <path
                    fill="currentColor"
                    d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                  ></path>
                </svg>
              </p>
            </div>
          </div>
          <div className="indices-content-wrap bor-danger px-3 py-2 mb-3">
            <div className="d-flex justify-content-between mb-1">
              <span className="indices-name fw-700 text-light-black">
                DOW JONES FUTURES
              </span>
              <span className="indices-value fw-500 text-light-black">
                37166.90
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="status-badge text-white bg-danger">Close</span>
              <p className="mb-0">
                <span className="text-danger">-12.33 (-0.16%)</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="svg-inline--fa fa-caret-down fa-w-10 text-danger"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width="20"
                  height="20"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <h6 className="fw-700 text-dark mb-3">Asian Indices</h6>
          <div className="indices-content-wrap bor-success px-3 py-2 mb-3">
            <div className="d-flex justify-content-between mb-1">
              <span className="indices-name fw-700 text-light-black">S&P 500</span>
              <span className="indices-value fw-500 text-light-black">4699.69</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="status-badge text-white bg-danger">Close</span>
              <p className="mb-0">
                <span className="color-green">55.99 (1.21%)</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-up"
                  className="svg-inline--fa fa-caret-up fa-w-10 color-green"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width="20"
                  height="20"
                >
                  <path
                    fill="currentColor"
                    d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                  ></path>
                </svg>
              </p>
            </div>
          </div>
          <div className="indices-content-wrap bor-danger px-3 py-2 mb-3">
            <div className="d-flex justify-content-between mb-1">
              <span className="indices-name fw-700 text-light-black">
                DOW JONES FUTURES
              </span>
              <span className="indices-value fw-500 text-light-black">
                37166.90
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="status-badge text-white bg-success">Open</span>
              <p className="mb-0">
                <span className="text-danger">-12.33 (-0.16%)</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="svg-inline--fa fa-caret-down fa-w-10 text-danger"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width="20"
                  height="20"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </p>
            </div>
          </div>
          <div className="indices-content-wrap bor-success px-3 py-2 mb-3">
            <div className="d-flex justify-content-between mb-1">
              <span className="indices-name fw-700 text-light-black">S&P 500</span>
              <span className="indices-value fw-500 text-light-black">4699.69</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="status-badge text-white bg-danger">Close</span>
              <p className="mb-0">
                <span className="color-green">55.99 (1.21%)</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-up"
                  className="svg-inline--fa fa-caret-up fa-w-10 color-green"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width="20"
                  height="20"
                >
                  <path
                    fill="currentColor"
                    d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                  ></path>
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopFiveBrokers;
