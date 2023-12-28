/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import axios from 'axios'


function MarqueeBar(props) {
    const {data} = props
  return (
    <>
      <marquee>
            <div className="marquee-text d-flex gap-3 align-items-center">
              {data &&
                data.map((symbol) => (
                  <a
                    href="#"
                    className="stock-info d-flex align-items-center gap-1"
                  >
                    
                    <p className="stock-name text-white mb-0">
                      {symbol?.symbol} <span className="stock-price"></span>
                    </p>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon={`caret-${
                        symbol?.ltp > symbol?.open_price ? "up" : "down"
                      }`}
                      className={`svg-inline--fa fa-caret-${
                        symbol?.ltp > symbol?.prev_close_price ? "up" : "down"
                      } fa-w-10 text-${
                        symbol?.ltp > symbol?.prev_close_price
                          ? "success"
                          : "danger"
                      } `}
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      width="25"
                      height="15"
                    >
                      <path
                        fill="currentColor"
                        d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                      ></path>
                    </svg>
                    <span
                      className={`text-${
                        symbol?.ltp > symbol?.prev_close_price
                          ? "success"
                          : "danger"
                      }`}
                    >
                      {symbol.ltp}
                    </span>
                  </a>
                ))}
            </div>
          </marquee>
    </>
  )
}

export default MarqueeBar