import React, { useEffect, useState } from "react";
const TopFiveBroker = ({ indicesdata }) => {
  indicesdata = indicesdata?.splice(0,2)
  return (
    <>
      <section class="container  my-4">
        {indicesdata &&
          indicesdata.map((symbol) => {
            return (
              <>
                <div class="swiper mySwiper p-2 p-md-3">
                  <div class="swiper-wrapper align-items-center">
                    <div class="swiper-slide d-flex align-items-center justify-content-center">
                      <div class="card-wrap">
                        <a href="#" class="card-top-content d-block">
                          <div class="p-3">
                            <h6 class="text-dark stock-name">
                              {symbol.symbol}
                              <span class="text-danger ms-2">
                                -90.70 (-0.43%)
                              </span>
                            </h6>
                            <div class="stock-info">
                              <div class="d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="long-arrow-alt-down"
                                    class="svg-inline--fa fa-long-arrow-alt-down fa-w-8 text-danger"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 512"
                                    width="20"
                                    height="20"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"
                                    ></path>
                                  </svg>
                                  <h4 class="text-dark mb-0 stock-text">
                                    {symbol?.high_price - symbol.low_price}
                                  </h4>
                                </div>
                                <div class="values d-flex align-items-center gap-3">
                                  <div>
                                    <p class="high mb-0 text-dark fw-500 stock-status">
                                      High
                                    </p>
                                    <span class="color-green stock-value fw-500">
                                      {symbol?.high_price}
                                    </span>
                                  </div>
                                  <div class="pe-2">
                                    <p class="high mb-0 text-dark fw-500 stock-status">
                                      Low
                                    </p>
                                    <span class="text-danger stock-value fw-500">
                                      {symbol.low_price}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </section>
    </>
  );
};

export default TopFiveBroker;
