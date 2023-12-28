/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import upstox_new from '../assets/upstox_new.webp'
import fyres_new from '../assets/fyers_new_fav.webp'
import zerodha from '../assets/Zerodha-900x0 (1).png'
import Angle from '../assets/angel_1_new.webp'
import Newaman from '../assets/Nuvama_Favicon_192x192_Sept 26.webp'


function CompanyAdvertise() {
  return (
    <>
    <section class="stock-name-wrapper container mb-5">
    <div class="d-flex justify-content-center justify-content-md-between gap-3 stock-row">
      <a href="https://upstox.com/developer/api-documentation/request-response" class="stock-card d-flex align-items-center upstop-bg">
        <div class="stock-img-wrap d-flex justify-content-center align-items-center"><img src={upstox_new} alt="Upstox image"/></div>
        <div class="stock-content-wrapper">
          <span class="stock-label text-dark">Upstox</span>
          <p class="stock-desc text-dark mb-0">Flat ₹20/Trade</p>
        </div>
      </a>
      <a href="https://fyers.in/" class="stock-card d-flex align-items-center light-blue-bg">
        <div class="stock-img-wrap d-flex justify-content-center align-items-center"><img src={fyres_new} alt="Fyers image"/></div>
        <div class="stock-content-wrapper">
          <span class="stock-label text-dark">Fyers</span>
          <p class="stock-desc text-dark mb-0">Flat ₹20/Trade</p>
        </div>
      </a>
      <a href="https://zerodha.com" class="stock-card d-flex align-items-center zerodha-bg">
        <div class="stock-img-wrap d-flex justify-content-center align-items-center"><img src={zerodha} alt="Zerodha image"/></div>
        <div class="stock-content-wrapper">
          <span class="stock-label text-dark">Zerodha</span>
          <p class="stock-desc text-dark mb-0">Flat ₹20/Trade</p>
        </div>
      </a>
      <a href="https://www.angelone.in/" class="stock-card d-flex align-items-center angel-one-bg">
        <div class="stock-img-wrap d-flex justify-content-center align-items-center"><img src={Angle} alt="Angel One image"/></div>
        <div class="stock-content-wrapper">
          <span class="stock-label text-dark">Angel One</span>
          <p class="stock-desc text-dark mb-0">Flat ₹20/Trade</p>
        </div>
      </a>
      <a href="https://www.nuvamawealth.com" class="stock-card d-flex align-items-center nuvama-bg">
        <div class="stock-img-wrap d-flex justify-content-center align-items-center"><img src={Newaman} alt="Nuvama image"/></div>
        <div class="stock-content-wrapper">
          <span class="stock-label text-dark">Nuvama</span>
          <p class="stock-desc text-dark mb-0">Flat ₹20/Trade</p>
        </div>
      </a>
    </div>
  </section>
    </>
  )
}

export default CompanyAdvertise