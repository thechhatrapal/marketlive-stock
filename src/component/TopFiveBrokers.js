/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import AoLogo from '../assets/AO-logo.webp'
import ZerodhaLogo from '../assets/Zerodha-900x0 (1).png'
import newalicelogo from '../assets/newalicelogo-small.webp'
import FyresLogo from '../assets/fyers-logo.webp'
import upstockLogo  from '../assets/upstox_logo.webp'
import Advertisements  from '../assets/advertisment.gif'


function TopFiveBrokers() {
  return (
    <section className="top-broker py-5 my-5 home-gray-bg d-none d-lg-block" id="topBrokerSection">
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <h3 className="text-center text-2xl font-bold text-dark mb-2">Top 5 Brokers</h3>
          <p className="sub-title text-center mb-5">Open account with leading brokers for Indian Stock Market.</p>
          <ul className="nav nav-pills mb-3 justify-content-between border-0" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-broker-one-tab" data-bs-toggle="pill" data-bs-target="#pills-broker-one" type="button" role="tab" aria-controls="pills-broker-one" aria-selected="true"><img src={ZerodhaLogo} alt="Zerodha Logo" className="broker-img"/></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-broker-two-tab" data-bs-toggle="pill" data-bs-target="#pills-broker-two" type="button" role="tab" aria-controls="pills-broker-two" aria-selected="false"><img src={AoLogo} alt="Angel one Logo" className="broker-img"/></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-broker-three-tab" data-bs-toggle="pill" data-bs-target="#pills-broker-three" type="button" role="tab" aria-controls="pills-broker-three" aria-selected="false"><img src={newalicelogo} alt="Alice Logo" className="broker-img"/></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-broker-four-tab" data-bs-toggle="pill" data-bs-target="#pills-broker-four" type="button" role="tab" aria-controls="pills-broker-four" aria-selected="false"><img src={FyresLogo} alt="Alice Logo" className="broker-img"/></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-broker-five-tab" data-bs-toggle="pill" data-bs-target="#pills-broker-five" type="button" role="tab" aria-controls="pills-broker-five" aria-selected="false"><img src={upstockLogo} alt="Alice Logo" className="broker-img"/></button>
            </li>
          </ul>
          <div className="tab-content broker-tab-content p-4" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-broker-one" role="tabpanel" aria-labelledby="pills-broker-one-tab">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <a href="#" className="broker-title">
                    <span className="text-light-black fw-700">Zerodha</span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" className="svg-inline--fa fa-external-link-alt fa-w-16 ms-1 text-light-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="14"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
                  </a>
                  <div className="ratting-wrap">
                    <ul className="ms-5">
                      <li className='flex items-center justify-center'>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                        <span className="text-light-black fs-14">(4.3)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="broker-service-title-wrap">
                  <span className="broker-service-title px-2 fw-500 py-1 text-light-black">DISCOUNT BROKER</span>
                </div>
                <a href="#" className="open-account-btn">Open account</a>
              </div>
              <ul className="d-flex justify-content-between align-items-center my-2">
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Equity" className="me-1" id="broker_equity" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_43" data-name="Group 43" transform="translate(1 -14)"><path id="Path_333" data-name="Path 333" d="M35.667,336H32.733a.734.734,0,0,0-.733.733V340.4a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-3.667A.734.734,0,0,0,35.667,336Z" transform="translate(-30.533 -305.867)" fill="#64b5f6"></path><path id="Path_334" data-name="Path 334" d="M195.667,208h-2.933a.734.734,0,0,0-.733.733v9.533a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-9.533A.734.734,0,0,0,195.667,208Z" transform="translate(-183.2 -183.733)" fill="#2196f3"></path><path id="Path_335" data-name="Path 335" d="M355.667,80h-2.933a.722.722,0,0,0-.733.71V95.623a.722.722,0,0,0,.733.71h2.933a.722.722,0,0,0,.733-.71V80.71A.722.722,0,0,0,355.667,80Z" transform="translate(-335.867 -61.067)" fill="#1e88e5"></path><path id="Path_336" data-name="Path 336" d="M74.992,16h-4.4a.733.733,0,0,0,0,1.467h2.63l-9.016,9.014a.734.734,0,0,0,1.038,1.038L74.259,18.5v2.63a.733.733,0,0,0,1.467,0v-4.4A.734.734,0,0,0,74.992,16Z" transform="translate(-61.059)" fill="#ffc107"></path><path id="Path_337" data-name="Path 337" d="M21.267,433.467H.733a.733.733,0,0,1,0-1.467H21.267a.733.733,0,0,1,0,1.467Z" transform="translate(0 -397.467)" fill="#455a64"></path></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Equity</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Futures" className="me-1" id="broker_equity_f" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_42" data-name="Group 42" transform="translate(1 -14)"><path id="Path_326" data-name="Path 326" d="M352.733,176h2.933a.734.734,0,0,1,.733.733v11a.734.734,0,0,1-.733.733h-2.933a.734.734,0,0,1-.733-.733v-11A.734.734,0,0,1,352.733,176Z" transform="translate(-335.867 -153.2)" fill="#1e88e5"></path><path id="Path_327" data-name="Path 327" d="M192.733,272h2.933a.734.734,0,0,1,.733.733v6.6a.734.734,0,0,1-.733.733h-2.933a.734.734,0,0,1-.733-.733v-6.6A.734.734,0,0,1,192.733,272Z" transform="translate(-183.2 -244.8)" fill="#2196f3"></path><path id="Path_328" data-name="Path 328" d="M32.733,176h2.933a.734.734,0,0,1,.733.733v11a.734.734,0,0,1-.733.733H32.733a.734.734,0,0,1-.733-.733v-11A.734.734,0,0,1,32.733,176Z" transform="translate(-30.533 -153.2)" fill="#64b5f6"></path><path id="Path_329" data-name="Path 329" d="M.733,433.467H21.267a.733.733,0,0,0,0-1.467H.733a.733.733,0,0,0,0,1.467Z" transform="translate(0 -397.467)" fill="#455a64"></path><g id="Group_41" data-name="Group 41" transform="translate(1.467 16)"><rect id="Rectangle_12" data-name="Rectangle 12" width="1.467" height="5.645" transform="matrix(0.515, -0.857, 0.857, 0.515, 3.074, 3.577)" fill="#ffc107"></rect><rect id="Rectangle_13" data-name="Rectangle 13" width="5.645" height="1.467" transform="matrix(0.857, -0.515, 0.515, 0.857, 10.408, 5.221)" fill="#ffc107"></rect><path id="Path_330" data-name="Path 330" d="M34.2,20.4a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,34.2,20.4Z" transform="translate(-32 -16)" fill="#ffc107"></path><path id="Path_331" data-name="Path 331" d="M194.2,116.4a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,194.2,116.4Z" transform="translate(-184.667 -107.6)" fill="#ffc107"></path><path id="Path_332" data-name="Path 332" d="M354.2,20.4a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,354.2,20.4Z" transform="translate(-337.333 -16)" fill="#ffc107"></path></g></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Futures</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Options" className="me-1" id="broker_equity" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_43" data-name="Group 43" transform="translate(1 -14)"><path id="Path_333" data-name="Path 333" d="M35.667,336H32.733a.734.734,0,0,0-.733.733V340.4a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-3.667A.734.734,0,0,0,35.667,336Z" transform="translate(-30.533 -305.867)" fill="#64b5f6"></path><path id="Path_334" data-name="Path 334" d="M195.667,208h-2.933a.734.734,0,0,0-.733.733v9.533a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-9.533A.734.734,0,0,0,195.667,208Z" transform="translate(-183.2 -183.733)" fill="#2196f3"></path><path id="Path_335" data-name="Path 335" d="M355.667,80h-2.933a.722.722,0,0,0-.733.71V95.623a.722.722,0,0,0,.733.71h2.933a.722.722,0,0,0,.733-.71V80.71A.722.722,0,0,0,355.667,80Z" transform="translate(-335.867 -61.067)" fill="#1e88e5"></path><path id="Path_336" data-name="Path 336" d="M74.992,16h-4.4a.733.733,0,0,0,0,1.467h2.63l-9.016,9.014a.734.734,0,0,0,1.038,1.038L74.259,18.5v2.63a.733.733,0,0,0,1.467,0v-4.4A.734.734,0,0,0,74.992,16Z" transform="translate(-61.059)" fill="#ffc107"></path><path id="Path_337" data-name="Path 337" d="M21.267,433.467H.733a.733.733,0,0,1,0-1.467H21.267a.733.733,0,0,1,0,1.467Z" transform="translate(0 -397.467)" fill="#455a64"></path></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Options</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Currency" className="me-1" id="rupee-sign" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><path id="Path_338" data-name="Path 338" d="M149.672,138.672a11,11,0,1,0,11,11A11.012,11.012,0,0,0,149.672,138.672Zm3.251,8.5a.75.75,0,1,1,0,1.5h-1.172a3.246,3.246,0,0,1-2.9,2.246l3.5,2.385a.749.749,0,0,1-.423,1.37.744.744,0,0,1-.422-.13l-5.5-3.75a.751.751,0,0,1,.423-1.371h2.25a1.749,1.749,0,0,0,1.433-.75h-3.683a.75.75,0,0,1,0-1.5h3.918a1.748,1.748,0,0,0-1.668-1.25h-2.25a.75.75,0,0,1,0-1.5h6.5a.75.75,0,0,1,0,1.5H151.4a3.229,3.229,0,0,1,.47,1.25h1.049Z" transform="translate(-137.672 -137.672)" fill="#2196f3"></path></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Currency Futures</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Currency" className="me-1" id="rupee-sign" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><path id="Path_338" data-name="Path 338" d="M149.672,138.672a11,11,0,1,0,11,11A11.012,11.012,0,0,0,149.672,138.672Zm3.251,8.5a.75.75,0,1,1,0,1.5h-1.172a3.246,3.246,0,0,1-2.9,2.246l3.5,2.385a.749.749,0,0,1-.423,1.37.744.744,0,0,1-.422-.13l-5.5-3.75a.751.751,0,0,1,.423-1.371h2.25a1.749,1.749,0,0,0,1.433-.75h-3.683a.75.75,0,0,1,0-1.5h3.918a1.748,1.748,0,0,0-1.668-1.25h-2.25a.75.75,0,0,1,0-1.5h6.5a.75.75,0,0,1,0,1.5H151.4a3.229,3.229,0,0,1,.47,1.25h1.049Z" transform="translate(-137.672 -137.672)" fill="#2196f3"></path></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Currency Options</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="16" className="me-1" alt="Commodity" id="broker_commodity" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_46" data-name="Group 46" transform="translate(1 1)"><path id="Path_339" data-name="Path 339" d="M51.25.688v5.5h-.687l-5.5,4.125H38.188l-5.5,5.5H32V.688A.681.681,0,0,1,32.688,0H50.563A.681.681,0,0,1,51.25.688Z" transform="translate(-30.625)" fill="#2196f3"></path><path id="Path_340" data-name="Path 340" d="M51.25,144v15.125a.681.681,0,0,1-.687.688H32.688a.681.681,0,0,1-.687-.687v-5.5h.688l5.5-5.5h6.875l5.5-4.125Z" transform="translate(-30.625 -137.813)" fill="#64b5f6"></path><g id="Group_44" data-name="Group 44" transform="translate(2.352 6.325)"><path id="Path_341" data-name="Path 341" d="M58.493,246.913l-3.547,3.547a.688.688,0,0,0,.974.972l3.547-3.548a.688.688,0,0,0-.973-.972Z" transform="translate(-54.744 -242.436)" fill="#fafafa"></path><path id="Path_342" data-name="Path 342" d="M350.127,147.464a.686.686,0,0,0-.962-.138l-3.3,2.475a.687.687,0,1,0,.824,1.1l3.3-2.475A.688.688,0,0,0,350.127,147.464Z" transform="translate(-333.09 -147.189)" fill="#fafafa"></path><path id="Path_343" data-name="Path 343" d="M196.813,224h-4.125a.688.688,0,0,0,0,1.375h4.125a.688.688,0,0,0,0-1.375Z" transform="translate(-186.102 -220.7)" fill="#fafafa"></path></g><g id="Group_45" data-name="Group 45" transform="translate(0 4.4)"><circle id="Ellipse_18" data-name="Ellipse 18" cx="2" cy="2" r="2" transform="translate(0 8.6)" fill="#ffc107"></circle><circle id="Ellipse_19" data-name="Ellipse 19" cx="2" cy="2" r="2" transform="translate(6 3.6)" fill="#ffc107"></circle><circle id="Ellipse_20" data-name="Ellipse 20" cx="2" cy="2" r="2" transform="translate(13 3.6)" fill="#ffc107"></circle><circle id="Ellipse_21" data-name="Ellipse 21" cx="2" cy="2" r="2" transform="translate(18 -0.4)" fill="#ffc107"></circle></g></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Commodity</span>
                </li>
              </ul>
              <div className="broker-premium-feature">
                <ul className="d-flex my-2">
                  <li>
                    <span className="title mb-2 d-block">Account Opening Charge</span>
                    <p className="price fw-500 mb-0 text-light-black">₹ 300</p>
                  </li>
                  <li>
                    <span className="title mb-2 d-block">Account Maintenance Charge</span>
                    <p className="price fw-500 mb-0 text-light-black">₹ 300</p>
                  </li>
                  <li>
                    <span className="title mb-2 d-block">Equity Delivery Brokerage</span>
                    <p className="price fw-500 mb-0 text-light-black">Zero</p>
                  </li>
                  <li>
                    <span className="title mb-2 d-block">Equity Intra Brokerage</span>
                    <p className="price fw-500 mb-0 text-light-black">0.03%</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-broker-two" role="tabpanel" aria-labelledby="pills-broker-two-tab">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <a href="#" className="broker-title">
                    <span className="text-light-black fw-700">Angel One</span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" className="svg-inline--fa fa-external-link-alt fa-w-16 ms-1 text-light-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="14"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
                  </a>
                  <div className="ratting-wrap">
                    <ul className="ms-5">
                      <li className='flex'>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                        <span className="text-light-black fs-14">(4.3)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="broker-service-title-wrap">
                  <span className="broker-service-title px-2 fw-500 py-1 text-light-black">FULL SERVICE BROKER</span>
                </div>
                <a href="#" className="open-account-btn">Open account</a>
              </div>
              <ul className="d-flex justify-content-between align-items-center my-2">
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Equity" className="me-1" id="broker_equity" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_43" data-name="Group 43" transform="translate(1 -14)"><path id="Path_333" data-name="Path 333" d="M35.667,336H32.733a.734.734,0,0,0-.733.733V340.4a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-3.667A.734.734,0,0,0,35.667,336Z" transform="translate(-30.533 -305.867)" fill="#64b5f6"></path><path id="Path_334" data-name="Path 334" d="M195.667,208h-2.933a.734.734,0,0,0-.733.733v9.533a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-9.533A.734.734,0,0,0,195.667,208Z" transform="translate(-183.2 -183.733)" fill="#2196f3"></path><path id="Path_335" data-name="Path 335" d="M355.667,80h-2.933a.722.722,0,0,0-.733.71V95.623a.722.722,0,0,0,.733.71h2.933a.722.722,0,0,0,.733-.71V80.71A.722.722,0,0,0,355.667,80Z" transform="translate(-335.867 -61.067)" fill="#1e88e5"></path><path id="Path_336" data-name="Path 336" d="M74.992,16h-4.4a.733.733,0,0,0,0,1.467h2.63l-9.016,9.014a.734.734,0,0,0,1.038,1.038L74.259,18.5v2.63a.733.733,0,0,0,1.467,0v-4.4A.734.734,0,0,0,74.992,16Z" transform="translate(-61.059)" fill="#ffc107"></path><path id="Path_337" data-name="Path 337" d="M21.267,433.467H.733a.733.733,0,0,1,0-1.467H21.267a.733.733,0,0,1,0,1.467Z" transform="translate(0 -397.467)" fill="#455a64"></path></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Equity</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Futures" className="me-1" id="broker_equity_f" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_42" data-name="Group 42" transform="translate(1 -14)"><path id="Path_326" data-name="Path 326" d="M352.733,176h2.933a.734.734,0,0,1,.733.733v11a.734.734,0,0,1-.733.733h-2.933a.734.734,0,0,1-.733-.733v-11A.734.734,0,0,1,352.733,176Z" transform="translate(-335.867 -153.2)" fill="#1e88e5"></path><path id="Path_327" data-name="Path 327" d="M192.733,272h2.933a.734.734,0,0,1,.733.733v6.6a.734.734,0,0,1-.733.733h-2.933a.734.734,0,0,1-.733-.733v-6.6A.734.734,0,0,1,192.733,272Z" transform="translate(-183.2 -244.8)" fill="#2196f3"></path><path id="Path_328" data-name="Path 328" d="M32.733,176h2.933a.734.734,0,0,1,.733.733v11a.734.734,0,0,1-.733.733H32.733a.734.734,0,0,1-.733-.733v-11A.734.734,0,0,1,32.733,176Z" transform="translate(-30.533 -153.2)" fill="#64b5f6"></path><path id="Path_329" data-name="Path 329" d="M.733,433.467H21.267a.733.733,0,0,0,0-1.467H.733a.733.733,0,0,0,0,1.467Z" transform="translate(0 -397.467)" fill="#455a64"></path><g id="Group_41" data-name="Group 41" transform="translate(1.467 16)"><rect id="Rectangle_12" data-name="Rectangle 12" width="1.467" height="5.645" transform="matrix(0.515, -0.857, 0.857, 0.515, 3.074, 3.577)" fill="#ffc107"></rect><rect id="Rectangle_13" data-name="Rectangle 13" width="5.645" height="1.467" transform="matrix(0.857, -0.515, 0.515, 0.857, 10.408, 5.221)" fill="#ffc107"></rect><path id="Path_330" data-name="Path 330" d="M34.2,20.4a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,34.2,20.4Z" transform="translate(-32 -16)" fill="#ffc107"></path><path id="Path_331" data-name="Path 331" d="M194.2,116.4a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,194.2,116.4Z" transform="translate(-184.667 -107.6)" fill="#ffc107"></path><path id="Path_332" data-name="Path 332" d="M354.2,20.4a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,354.2,20.4Z" transform="translate(-337.333 -16)" fill="#ffc107"></path></g></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Futures</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Options" className="me-1" id="broker_equity" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_43" data-name="Group 43" transform="translate(1 -14)"><path id="Path_333" data-name="Path 333" d="M35.667,336H32.733a.734.734,0,0,0-.733.733V340.4a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-3.667A.734.734,0,0,0,35.667,336Z" transform="translate(-30.533 -305.867)" fill="#64b5f6"></path><path id="Path_334" data-name="Path 334" d="M195.667,208h-2.933a.734.734,0,0,0-.733.733v9.533a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-9.533A.734.734,0,0,0,195.667,208Z" transform="translate(-183.2 -183.733)" fill="#2196f3"></path><path id="Path_335" data-name="Path 335" d="M355.667,80h-2.933a.722.722,0,0,0-.733.71V95.623a.722.722,0,0,0,.733.71h2.933a.722.722,0,0,0,.733-.71V80.71A.722.722,0,0,0,355.667,80Z" transform="translate(-335.867 -61.067)" fill="#1e88e5"></path><path id="Path_336" data-name="Path 336" d="M74.992,16h-4.4a.733.733,0,0,0,0,1.467h2.63l-9.016,9.014a.734.734,0,0,0,1.038,1.038L74.259,18.5v2.63a.733.733,0,0,0,1.467,0v-4.4A.734.734,0,0,0,74.992,16Z" transform="translate(-61.059)" fill="#ffc107"></path><path id="Path_337" data-name="Path 337" d="M21.267,433.467H.733a.733.733,0,0,1,0-1.467H21.267a.733.733,0,0,1,0,1.467Z" transform="translate(0 -397.467)" fill="#455a64"></path></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Options</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Currency" className="me-1" id="rupee-sign" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><path id="Path_338" data-name="Path 338" d="M149.672,138.672a11,11,0,1,0,11,11A11.012,11.012,0,0,0,149.672,138.672Zm3.251,8.5a.75.75,0,1,1,0,1.5h-1.172a3.246,3.246,0,0,1-2.9,2.246l3.5,2.385a.749.749,0,0,1-.423,1.37.744.744,0,0,1-.422-.13l-5.5-3.75a.751.751,0,0,1,.423-1.371h2.25a1.749,1.749,0,0,0,1.433-.75h-3.683a.75.75,0,0,1,0-1.5h3.918a1.748,1.748,0,0,0-1.668-1.25h-2.25a.75.75,0,0,1,0-1.5h6.5a.75.75,0,0,1,0,1.5H151.4a3.229,3.229,0,0,1,.47,1.25h1.049Z" transform="translate(-137.672 -137.672)" fill="#2196f3"></path></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Currency Futures</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Currency" className="me-1" id="rupee-sign" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><path id="Path_338" data-name="Path 338" d="M149.672,138.672a11,11,0,1,0,11,11A11.012,11.012,0,0,0,149.672,138.672Zm3.251,8.5a.75.75,0,1,1,0,1.5h-1.172a3.246,3.246,0,0,1-2.9,2.246l3.5,2.385a.749.749,0,0,1-.423,1.37.744.744,0,0,1-.422-.13l-5.5-3.75a.751.751,0,0,1,.423-1.371h2.25a1.749,1.749,0,0,0,1.433-.75h-3.683a.75.75,0,0,1,0-1.5h3.918a1.748,1.748,0,0,0-1.668-1.25h-2.25a.75.75,0,0,1,0-1.5h6.5a.75.75,0,0,1,0,1.5H151.4a3.229,3.229,0,0,1,.47,1.25h1.049Z" transform="translate(-137.672 -137.672)" fill="#2196f3"></path></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Currency Options</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="16" className="me-1" alt="Commodity" id="broker_commodity" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_46" data-name="Group 46" transform="translate(1 1)"><path id="Path_339" data-name="Path 339" d="M51.25.688v5.5h-.687l-5.5,4.125H38.188l-5.5,5.5H32V.688A.681.681,0,0,1,32.688,0H50.563A.681.681,0,0,1,51.25.688Z" transform="translate(-30.625)" fill="#2196f3"></path><path id="Path_340" data-name="Path 340" d="M51.25,144v15.125a.681.681,0,0,1-.687.688H32.688a.681.681,0,0,1-.687-.687v-5.5h.688l5.5-5.5h6.875l5.5-4.125Z" transform="translate(-30.625 -137.813)" fill="#64b5f6"></path><g id="Group_44" data-name="Group 44" transform="translate(2.352 6.325)"><path id="Path_341" data-name="Path 341" d="M58.493,246.913l-3.547,3.547a.688.688,0,0,0,.974.972l3.547-3.548a.688.688,0,0,0-.973-.972Z" transform="translate(-54.744 -242.436)" fill="#fafafa"></path><path id="Path_342" data-name="Path 342" d="M350.127,147.464a.686.686,0,0,0-.962-.138l-3.3,2.475a.687.687,0,1,0,.824,1.1l3.3-2.475A.688.688,0,0,0,350.127,147.464Z" transform="translate(-333.09 -147.189)" fill="#fafafa"></path><path id="Path_343" data-name="Path 343" d="M196.813,224h-4.125a.688.688,0,0,0,0,1.375h4.125a.688.688,0,0,0,0-1.375Z" transform="translate(-186.102 -220.7)" fill="#fafafa"></path></g><g id="Group_45" data-name="Group 45" transform="translate(0 4.4)"><circle id="Ellipse_18" data-name="Ellipse 18" cx="2" cy="2" r="2" transform="translate(0 8.6)" fill="#ffc107"></circle><circle id="Ellipse_19" data-name="Ellipse 19" cx="2" cy="2" r="2" transform="translate(6 3.6)" fill="#ffc107"></circle><circle id="Ellipse_20" data-name="Ellipse 20" cx="2" cy="2" r="2" transform="translate(13 3.6)" fill="#ffc107"></circle><circle id="Ellipse_21" data-name="Ellipse 21" cx="2" cy="2" r="2" transform="translate(18 -0.4)" fill="#ffc107"></circle></g></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Commodity</span>
                </li>
              </ul>
              <div className="broker-premium-feature">
                <ul className="d-flex my-2">
                  <li>
                    <span className="title mb-2 d-block">Account Opening Charge</span>
                    <p className="price fw-500 mb-0 text-light-black">Free</p>
                  </li>
                  <li>
                    <span className="title mb-2 d-block">Account Maintenance Charge</span>
                    <p className="price fw-500 mb-0 text-light-black">₹ 240</p>
                  </li>
                  <li>
                    <span className="title mb-2 d-block">Equity Delivery Brokerage</span>
                    <p className="price fw-500 mb-0 text-light-black">Zero</p>
                  </li>
                  <li>
                    <span className="title mb-2 d-block">Equity Intra Brokerage</span>
                    <p className="price fw-500 mb-0 text-light-black">0.05%</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-broker-three" role="tabpanel" aria-labelledby="pills-broker-three-tab">
              <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                      <a href="#" className="broker-title">
                        <span className="text-light-black fw-700">Alice Blue</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" className="svg-inline--fa fa-external-link-alt fa-w-16 ms-1 text-light-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="14"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
                      </a>
                      <div className="ratting-wrap">
                        <ul className="ms-5">
                        <li className='flex'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                            <span className="text-light-black fs-14">(4.3)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="broker-service-title-wrap">
                      <span className="broker-service-title px-2 fw-500 py-1 text-light-black">DISCOUNT BROKER</span>
                    </div>
                    <a href="#" className="open-account-btn">Open account</a>
              </div>
              <ul className="d-flex justify-content-between align-items-center my-2">
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Equity" className="me-1" id="broker_equity" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_43" data-name="Group 43" transform="translate(1 -14)"><path id="Path_333" data-name="Path 333" d="M35.667,336H32.733a.734.734,0,0,0-.733.733V340.4a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-3.667A.734.734,0,0,0,35.667,336Z" transform="translate(-30.533 -305.867)" fill="#64b5f6"></path><path id="Path_334" data-name="Path 334" d="M195.667,208h-2.933a.734.734,0,0,0-.733.733v9.533a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-9.533A.734.734,0,0,0,195.667,208Z" transform="translate(-183.2 -183.733)" fill="#2196f3"></path><path id="Path_335" data-name="Path 335" d="M355.667,80h-2.933a.722.722,0,0,0-.733.71V95.623a.722.722,0,0,0,.733.71h2.933a.722.722,0,0,0,.733-.71V80.71A.722.722,0,0,0,355.667,80Z" transform="translate(-335.867 -61.067)" fill="#1e88e5"></path><path id="Path_336" data-name="Path 336" d="M74.992,16h-4.4a.733.733,0,0,0,0,1.467h2.63l-9.016,9.014a.734.734,0,0,0,1.038,1.038L74.259,18.5v2.63a.733.733,0,0,0,1.467,0v-4.4A.734.734,0,0,0,74.992,16Z" transform="translate(-61.059)" fill="#ffc107"></path><path id="Path_337" data-name="Path 337" d="M21.267,433.467H.733a.733.733,0,0,1,0-1.467H21.267a.733.733,0,0,1,0,1.467Z" transform="translate(0 -397.467)" fill="#455a64"></path></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Equity</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Futures" className="me-1" id="broker_equity_f" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_42" data-name="Group 42" transform="translate(1 -14)"><path id="Path_326" data-name="Path 326" d="M352.733,176h2.933a.734.734,0,0,1,.733.733v11a.734.734,0,0,1-.733.733h-2.933a.734.734,0,0,1-.733-.733v-11A.734.734,0,0,1,352.733,176Z" transform="translate(-335.867 -153.2)" fill="#1e88e5"></path><path id="Path_327" data-name="Path 327" d="M192.733,272h2.933a.734.734,0,0,1,.733.733v6.6a.734.734,0,0,1-.733.733h-2.933a.734.734,0,0,1-.733-.733v-6.6A.734.734,0,0,1,192.733,272Z" transform="translate(-183.2 -244.8)" fill="#2196f3"></path><path id="Path_328" data-name="Path 328" d="M32.733,176h2.933a.734.734,0,0,1,.733.733v11a.734.734,0,0,1-.733.733H32.733a.734.734,0,0,1-.733-.733v-11A.734.734,0,0,1,32.733,176Z" transform="translate(-30.533 -153.2)" fill="#64b5f6"></path><path id="Path_329" data-name="Path 329" d="M.733,433.467H21.267a.733.733,0,0,0,0-1.467H.733a.733.733,0,0,0,0,1.467Z" transform="translate(0 -397.467)" fill="#455a64"></path><g id="Group_41" data-name="Group 41" transform="translate(1.467 16)"><rect id="Rectangle_12" data-name="Rectangle 12" width="1.467" height="5.645" transform="matrix(0.515, -0.857, 0.857, 0.515, 3.074, 3.577)" fill="#ffc107"></rect><rect id="Rectangle_13" data-name="Rectangle 13" width="5.645" height="1.467" transform="matrix(0.857, -0.515, 0.515, 0.857, 10.408, 5.221)" fill="#ffc107"></rect><path id="Path_330" data-name="Path 330" d="M34.2,20.4a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,34.2,20.4Z" transform="translate(-32 -16)" fill="#ffc107"></path><path id="Path_331" data-name="Path 331" d="M194.2,116.4a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,194.2,116.4Z" transform="translate(-184.667 -107.6)" fill="#ffc107"></path><path id="Path_332" data-name="Path 332" d="M354.2,20.4a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,354.2,20.4Z" transform="translate(-337.333 -16)" fill="#ffc107"></path></g></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Futures</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Options" className="me-1" id="broker_equity" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_43" data-name="Group 43" transform="translate(1 -14)"><path id="Path_333" data-name="Path 333" d="M35.667,336H32.733a.734.734,0,0,0-.733.733V340.4a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-3.667A.734.734,0,0,0,35.667,336Z" transform="translate(-30.533 -305.867)" fill="#64b5f6"></path><path id="Path_334" data-name="Path 334" d="M195.667,208h-2.933a.734.734,0,0,0-.733.733v9.533a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-9.533A.734.734,0,0,0,195.667,208Z" transform="translate(-183.2 -183.733)" fill="#2196f3"></path><path id="Path_335" data-name="Path 335" d="M355.667,80h-2.933a.722.722,0,0,0-.733.71V95.623a.722.722,0,0,0,.733.71h2.933a.722.722,0,0,0,.733-.71V80.71A.722.722,0,0,0,355.667,80Z" transform="translate(-335.867 -61.067)" fill="#1e88e5"></path><path id="Path_336" data-name="Path 336" d="M74.992,16h-4.4a.733.733,0,0,0,0,1.467h2.63l-9.016,9.014a.734.734,0,0,0,1.038,1.038L74.259,18.5v2.63a.733.733,0,0,0,1.467,0v-4.4A.734.734,0,0,0,74.992,16Z" transform="translate(-61.059)" fill="#ffc107"></path><path id="Path_337" data-name="Path 337" d="M21.267,433.467H.733a.733.733,0,0,1,0-1.467H21.267a.733.733,0,0,1,0,1.467Z" transform="translate(0 -397.467)" fill="#455a64"></path></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Options</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Currency" className="me-1" id="rupee-sign" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><path id="Path_338" data-name="Path 338" d="M149.672,138.672a11,11,0,1,0,11,11A11.012,11.012,0,0,0,149.672,138.672Zm3.251,8.5a.75.75,0,1,1,0,1.5h-1.172a3.246,3.246,0,0,1-2.9,2.246l3.5,2.385a.749.749,0,0,1-.423,1.37.744.744,0,0,1-.422-.13l-5.5-3.75a.751.751,0,0,1,.423-1.371h2.25a1.749,1.749,0,0,0,1.433-.75h-3.683a.75.75,0,0,1,0-1.5h3.918a1.748,1.748,0,0,0-1.668-1.25h-2.25a.75.75,0,0,1,0-1.5h6.5a.75.75,0,0,1,0,1.5H151.4a3.229,3.229,0,0,1,.47,1.25h1.049Z" transform="translate(-137.672 -137.672)" fill="#2196f3"></path></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Currency Futures</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Currency" className="me-1" id="rupee-sign" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><path id="Path_338" data-name="Path 338" d="M149.672,138.672a11,11,0,1,0,11,11A11.012,11.012,0,0,0,149.672,138.672Zm3.251,8.5a.75.75,0,1,1,0,1.5h-1.172a3.246,3.246,0,0,1-2.9,2.246l3.5,2.385a.749.749,0,0,1-.423,1.37.744.744,0,0,1-.422-.13l-5.5-3.75a.751.751,0,0,1,.423-1.371h2.25a1.749,1.749,0,0,0,1.433-.75h-3.683a.75.75,0,0,1,0-1.5h3.918a1.748,1.748,0,0,0-1.668-1.25h-2.25a.75.75,0,0,1,0-1.5h6.5a.75.75,0,0,1,0,1.5H151.4a3.229,3.229,0,0,1,.47,1.25h1.049Z" transform="translate(-137.672 -137.672)" fill="#2196f3"></path></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Currency Options</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="16" className="me-1" alt="Commodity" id="broker_commodity" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_46" data-name="Group 46" transform="translate(1 1)"><path id="Path_339" data-name="Path 339" d="M51.25.688v5.5h-.687l-5.5,4.125H38.188l-5.5,5.5H32V.688A.681.681,0,0,1,32.688,0H50.563A.681.681,0,0,1,51.25.688Z" transform="translate(-30.625)" fill="#2196f3"></path><path id="Path_340" data-name="Path 340" d="M51.25,144v15.125a.681.681,0,0,1-.687.688H32.688a.681.681,0,0,1-.687-.687v-5.5h.688l5.5-5.5h6.875l5.5-4.125Z" transform="translate(-30.625 -137.813)" fill="#64b5f6"></path><g id="Group_44" data-name="Group 44" transform="translate(2.352 6.325)"><path id="Path_341" data-name="Path 341" d="M58.493,246.913l-3.547,3.547a.688.688,0,0,0,.974.972l3.547-3.548a.688.688,0,0,0-.973-.972Z" transform="translate(-54.744 -242.436)" fill="#fafafa"></path><path id="Path_342" data-name="Path 342" d="M350.127,147.464a.686.686,0,0,0-.962-.138l-3.3,2.475a.687.687,0,1,0,.824,1.1l3.3-2.475A.688.688,0,0,0,350.127,147.464Z" transform="translate(-333.09 -147.189)" fill="#fafafa"></path><path id="Path_343" data-name="Path 343" d="M196.813,224h-4.125a.688.688,0,0,0,0,1.375h4.125a.688.688,0,0,0,0-1.375Z" transform="translate(-186.102 -220.7)" fill="#fafafa"></path></g><g id="Group_45" data-name="Group 45" transform="translate(0 4.4)"><circle id="Ellipse_18" data-name="Ellipse 18" cx="2" cy="2" r="2" transform="translate(0 8.6)" fill="#ffc107"></circle><circle id="Ellipse_19" data-name="Ellipse 19" cx="2" cy="2" r="2" transform="translate(6 3.6)" fill="#ffc107"></circle><circle id="Ellipse_20" data-name="Ellipse 20" cx="2" cy="2" r="2" transform="translate(13 3.6)" fill="#ffc107"></circle><circle id="Ellipse_21" data-name="Ellipse 21" cx="2" cy="2" r="2" transform="translate(18 -0.4)" fill="#ffc107"></circle></g></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Commodity</span>
                </li>
              </ul>
              <div className="broker-premium-feature">
                <ul className="d-flex my-2">
                  <li>
                    <span className="title mb-2 d-block">Account Opening Charge</span>
                    <p className="price fw-500 mb-0 text-light-black">₹ 150</p>
                  </li>
                  <li>
                    <span className="title mb-2 d-block">Account Maintenance Charge</span>
                    <p className="price fw-500 mb-0 text-light-black">₹ 400</p>
                  </li>
                  <li>
                    <span className="title mb-2 d-block">Equity Delivery Brokerage</span>
                    <p className="price fw-500 mb-0 text-light-black">Zero</p>
                  </li>
                  <li>
                    <span className="title mb-2 d-block">Equity Intra Brokerage</span>
                    <p className="price fw-500 mb-0 text-light-black">0.01%</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-broker-four" role="tabpanel" aria-labelledby="pills-broker-three-tab">
              <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <a href="#" className="broker-title">
                      <span className="text-light-black fw-700">FYERS</span>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" className="svg-inline--fa fa-external-link-alt fa-w-16 ms-1 text-light-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="14"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
                    </a>
                    <div className="ratting-wrap">
                      <ul className="ms-5">
                      <li className='flex'>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                          <span className="text-light-black fs-14">(4.3)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="broker-service-title-wrap">
                    <span className="broker-service-title px-2 fw-500 py-1 text-light-black">DISCOUNT BROKER</span>
                  </div>
                  <a href="#" className="open-account-btn">Open account</a>
              </div>
              <ul className="d-flex justify-content-between align-items-center my-2">
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Equity" className="me-1" id="broker_equity" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_43" data-name="Group 43" transform="translate(1 -14)"><path id="Path_333" data-name="Path 333" d="M35.667,336H32.733a.734.734,0,0,0-.733.733V340.4a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-3.667A.734.734,0,0,0,35.667,336Z" transform="translate(-30.533 -305.867)" fill="#64b5f6"></path><path id="Path_334" data-name="Path 334" d="M195.667,208h-2.933a.734.734,0,0,0-.733.733v9.533a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-9.533A.734.734,0,0,0,195.667,208Z" transform="translate(-183.2 -183.733)" fill="#2196f3"></path><path id="Path_335" data-name="Path 335" d="M355.667,80h-2.933a.722.722,0,0,0-.733.71V95.623a.722.722,0,0,0,.733.71h2.933a.722.722,0,0,0,.733-.71V80.71A.722.722,0,0,0,355.667,80Z" transform="translate(-335.867 -61.067)" fill="#1e88e5"></path><path id="Path_336" data-name="Path 336" d="M74.992,16h-4.4a.733.733,0,0,0,0,1.467h2.63l-9.016,9.014a.734.734,0,0,0,1.038,1.038L74.259,18.5v2.63a.733.733,0,0,0,1.467,0v-4.4A.734.734,0,0,0,74.992,16Z" transform="translate(-61.059)" fill="#ffc107"></path><path id="Path_337" data-name="Path 337" d="M21.267,433.467H.733a.733.733,0,0,1,0-1.467H21.267a.733.733,0,0,1,0,1.467Z" transform="translate(0 -397.467)" fill="#455a64"></path></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Equity</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Futures" className="me-1" id="broker_equity_f" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_42" data-name="Group 42" transform="translate(1 -14)"><path id="Path_326" data-name="Path 326" d="M352.733,176h2.933a.734.734,0,0,1,.733.733v11a.734.734,0,0,1-.733.733h-2.933a.734.734,0,0,1-.733-.733v-11A.734.734,0,0,1,352.733,176Z" transform="translate(-335.867 -153.2)" fill="#1e88e5"></path><path id="Path_327" data-name="Path 327" d="M192.733,272h2.933a.734.734,0,0,1,.733.733v6.6a.734.734,0,0,1-.733.733h-2.933a.734.734,0,0,1-.733-.733v-6.6A.734.734,0,0,1,192.733,272Z" transform="translate(-183.2 -244.8)" fill="#2196f3"></path><path id="Path_328" data-name="Path 328" d="M32.733,176h2.933a.734.734,0,0,1,.733.733v11a.734.734,0,0,1-.733.733H32.733a.734.734,0,0,1-.733-.733v-11A.734.734,0,0,1,32.733,176Z" transform="translate(-30.533 -153.2)" fill="#64b5f6"></path><path id="Path_329" data-name="Path 329" d="M.733,433.467H21.267a.733.733,0,0,0,0-1.467H.733a.733.733,0,0,0,0,1.467Z" transform="translate(0 -397.467)" fill="#455a64"></path><g id="Group_41" data-name="Group 41" transform="translate(1.467 16)"><rect id="Rectangle_12" data-name="Rectangle 12" width="1.467" height="5.645" transform="matrix(0.515, -0.857, 0.857, 0.515, 3.074, 3.577)" fill="#ffc107"></rect><rect id="Rectangle_13" data-name="Rectangle 13" width="5.645" height="1.467" transform="matrix(0.857, -0.515, 0.515, 0.857, 10.408, 5.221)" fill="#ffc107"></rect><path id="Path_330" data-name="Path 330" d="M34.2,20.4a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,34.2,20.4Z" transform="translate(-32 -16)" fill="#ffc107"></path><path id="Path_331" data-name="Path 331" d="M194.2,116.4a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,194.2,116.4Z" transform="translate(-184.667 -107.6)" fill="#ffc107"></path><path id="Path_332" data-name="Path 332" d="M354.2,20.4a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,354.2,20.4Z" transform="translate(-337.333 -16)" fill="#ffc107"></path></g></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Futures</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Options" className="me-1" id="broker_equity" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_43" data-name="Group 43" transform="translate(1 -14)"><path id="Path_333" data-name="Path 333" d="M35.667,336H32.733a.734.734,0,0,0-.733.733V340.4a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-3.667A.734.734,0,0,0,35.667,336Z" transform="translate(-30.533 -305.867)" fill="#64b5f6"></path><path id="Path_334" data-name="Path 334" d="M195.667,208h-2.933a.734.734,0,0,0-.733.733v9.533a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-9.533A.734.734,0,0,0,195.667,208Z" transform="translate(-183.2 -183.733)" fill="#2196f3"></path><path id="Path_335" data-name="Path 335" d="M355.667,80h-2.933a.722.722,0,0,0-.733.71V95.623a.722.722,0,0,0,.733.71h2.933a.722.722,0,0,0,.733-.71V80.71A.722.722,0,0,0,355.667,80Z" transform="translate(-335.867 -61.067)" fill="#1e88e5"></path><path id="Path_336" data-name="Path 336" d="M74.992,16h-4.4a.733.733,0,0,0,0,1.467h2.63l-9.016,9.014a.734.734,0,0,0,1.038,1.038L74.259,18.5v2.63a.733.733,0,0,0,1.467,0v-4.4A.734.734,0,0,0,74.992,16Z" transform="translate(-61.059)" fill="#ffc107"></path><path id="Path_337" data-name="Path 337" d="M21.267,433.467H.733a.733.733,0,0,1,0-1.467H21.267a.733.733,0,0,1,0,1.467Z" transform="translate(0 -397.467)" fill="#455a64"></path></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Options</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Currency" className="me-1" id="rupee-sign" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><path id="Path_338" data-name="Path 338" d="M149.672,138.672a11,11,0,1,0,11,11A11.012,11.012,0,0,0,149.672,138.672Zm3.251,8.5a.75.75,0,1,1,0,1.5h-1.172a3.246,3.246,0,0,1-2.9,2.246l3.5,2.385a.749.749,0,0,1-.423,1.37.744.744,0,0,1-.422-.13l-5.5-3.75a.751.751,0,0,1,.423-1.371h2.25a1.749,1.749,0,0,0,1.433-.75h-3.683a.75.75,0,0,1,0-1.5h3.918a1.748,1.748,0,0,0-1.668-1.25h-2.25a.75.75,0,0,1,0-1.5h6.5a.75.75,0,0,1,0,1.5H151.4a3.229,3.229,0,0,1,.47,1.25h1.049Z" transform="translate(-137.672 -137.672)" fill="#2196f3"></path></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Currency Futures</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Currency" className="me-1" id="rupee-sign" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><path id="Path_338" data-name="Path 338" d="M149.672,138.672a11,11,0,1,0,11,11A11.012,11.012,0,0,0,149.672,138.672Zm3.251,8.5a.75.75,0,1,1,0,1.5h-1.172a3.246,3.246,0,0,1-2.9,2.246l3.5,2.385a.749.749,0,0,1-.423,1.37.744.744,0,0,1-.422-.13l-5.5-3.75a.751.751,0,0,1,.423-1.371h2.25a1.749,1.749,0,0,0,1.433-.75h-3.683a.75.75,0,0,1,0-1.5h3.918a1.748,1.748,0,0,0-1.668-1.25h-2.25a.75.75,0,0,1,0-1.5h6.5a.75.75,0,0,1,0,1.5H151.4a3.229,3.229,0,0,1,.47,1.25h1.049Z" transform="translate(-137.672 -137.672)" fill="#2196f3"></path></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Currency Options</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="16" className="me-1" alt="Commodity" id="broker_commodity" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_46" data-name="Group 46" transform="translate(1 1)"><path id="Path_339" data-name="Path 339" d="M51.25.688v5.5h-.687l-5.5,4.125H38.188l-5.5,5.5H32V.688A.681.681,0,0,1,32.688,0H50.563A.681.681,0,0,1,51.25.688Z" transform="translate(-30.625)" fill="#2196f3"></path><path id="Path_340" data-name="Path 340" d="M51.25,144v15.125a.681.681,0,0,1-.687.688H32.688a.681.681,0,0,1-.687-.687v-5.5h.688l5.5-5.5h6.875l5.5-4.125Z" transform="translate(-30.625 -137.813)" fill="#64b5f6"></path><g id="Group_44" data-name="Group 44" transform="translate(2.352 6.325)"><path id="Path_341" data-name="Path 341" d="M58.493,246.913l-3.547,3.547a.688.688,0,0,0,.974.972l3.547-3.548a.688.688,0,0,0-.973-.972Z" transform="translate(-54.744 -242.436)" fill="#fafafa"></path><path id="Path_342" data-name="Path 342" d="M350.127,147.464a.686.686,0,0,0-.962-.138l-3.3,2.475a.687.687,0,1,0,.824,1.1l3.3-2.475A.688.688,0,0,0,350.127,147.464Z" transform="translate(-333.09 -147.189)" fill="#fafafa"></path><path id="Path_343" data-name="Path 343" d="M196.813,224h-4.125a.688.688,0,0,0,0,1.375h4.125a.688.688,0,0,0,0-1.375Z" transform="translate(-186.102 -220.7)" fill="#fafafa"></path></g><g id="Group_45" data-name="Group 45" transform="translate(0 4.4)"><circle id="Ellipse_18" data-name="Ellipse 18" cx="2" cy="2" r="2" transform="translate(0 8.6)" fill="#ffc107"></circle><circle id="Ellipse_19" data-name="Ellipse 19" cx="2" cy="2" r="2" transform="translate(6 3.6)" fill="#ffc107"></circle><circle id="Ellipse_20" data-name="Ellipse 20" cx="2" cy="2" r="2" transform="translate(13 3.6)" fill="#ffc107"></circle><circle id="Ellipse_21" data-name="Ellipse 21" cx="2" cy="2" r="2" transform="translate(18 -0.4)" fill="#ffc107"></circle></g></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Commodity</span>
                </li>
              </ul>
              <div className="broker-premium-feature">
                <ul className="d-flex my-2">
                  <li>
                    <span className="title mb-2 d-block">Account Opening Charge</span>
                    <p className="price fw-500 mb-0 text-light-black">Free</p>
                  </li>
                  <li>
                    <span className="title mb-2 d-block">Account Maintenance Charge</span>
                    <p className="price fw-500 mb-0 text-light-black">Zero</p>
                  </li>
                  <li>
                    <span className="title mb-2 d-block">Equity Delivery Brokerage</span>
                    <p className="price fw-500 mb-0 text-light-black">Zero</p>
                  </li>
                  <li>
                    <span className="title mb-2 d-block">Equity Intra Brokerage</span>
                    <p className="price fw-500 mb-0 text-light-black">0.03% or ₹20 per executed order</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-broker-five" role="tabpanel" aria-labelledby="pills-broker-three-tab">
              <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <a href="#" className="broker-title">
                      <span className="text-light-black fw-700">Upstox</span>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" className="svg-inline--fa fa-external-link-alt fa-w-16 ms-1 text-light-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="14"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
                    </a>
                    <div className="ratting-wrap">
                      <ul className="ms-5">
                      <li className='flex'>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14"><path fill="#f5a523" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                          <span className="text-light-black fs-14">(4.3)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="broker-service-title-wrap">
                    <span className="broker-service-title px-2 fw-500 py-1 text-light-black">DISCOUNT BROKER</span>
                  </div>
                  <a href="#" className="open-account-btn">Open account</a>
              </div>
              <ul className="d-flex justify-content-between align-items-center my-2">
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Equity" className="me-1" id="broker_equity" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_43" data-name="Group 43" transform="translate(1 -14)"><path id="Path_333" data-name="Path 333" d="M35.667,336H32.733a.734.734,0,0,0-.733.733V340.4a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-3.667A.734.734,0,0,0,35.667,336Z" transform="translate(-30.533 -305.867)" fill="#64b5f6"></path><path id="Path_334" data-name="Path 334" d="M195.667,208h-2.933a.734.734,0,0,0-.733.733v9.533a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-9.533A.734.734,0,0,0,195.667,208Z" transform="translate(-183.2 -183.733)" fill="#2196f3"></path><path id="Path_335" data-name="Path 335" d="M355.667,80h-2.933a.722.722,0,0,0-.733.71V95.623a.722.722,0,0,0,.733.71h2.933a.722.722,0,0,0,.733-.71V80.71A.722.722,0,0,0,355.667,80Z" transform="translate(-335.867 -61.067)" fill="#1e88e5"></path><path id="Path_336" data-name="Path 336" d="M74.992,16h-4.4a.733.733,0,0,0,0,1.467h2.63l-9.016,9.014a.734.734,0,0,0,1.038,1.038L74.259,18.5v2.63a.733.733,0,0,0,1.467,0v-4.4A.734.734,0,0,0,74.992,16Z" transform="translate(-61.059)" fill="#ffc107"></path><path id="Path_337" data-name="Path 337" d="M21.267,433.467H.733a.733.733,0,0,1,0-1.467H21.267a.733.733,0,0,1,0,1.467Z" transform="translate(0 -397.467)" fill="#455a64"></path></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Equity</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Futures" className="me-1" id="broker_equity_f" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_42" data-name="Group 42" transform="translate(1 -14)"><path id="Path_326" data-name="Path 326" d="M352.733,176h2.933a.734.734,0,0,1,.733.733v11a.734.734,0,0,1-.733.733h-2.933a.734.734,0,0,1-.733-.733v-11A.734.734,0,0,1,352.733,176Z" transform="translate(-335.867 -153.2)" fill="#1e88e5"></path><path id="Path_327" data-name="Path 327" d="M192.733,272h2.933a.734.734,0,0,1,.733.733v6.6a.734.734,0,0,1-.733.733h-2.933a.734.734,0,0,1-.733-.733v-6.6A.734.734,0,0,1,192.733,272Z" transform="translate(-183.2 -244.8)" fill="#2196f3"></path><path id="Path_328" data-name="Path 328" d="M32.733,176h2.933a.734.734,0,0,1,.733.733v11a.734.734,0,0,1-.733.733H32.733a.734.734,0,0,1-.733-.733v-11A.734.734,0,0,1,32.733,176Z" transform="translate(-30.533 -153.2)" fill="#64b5f6"></path><path id="Path_329" data-name="Path 329" d="M.733,433.467H21.267a.733.733,0,0,0,0-1.467H.733a.733.733,0,0,0,0,1.467Z" transform="translate(0 -397.467)" fill="#455a64"></path><g id="Group_41" data-name="Group 41" transform="translate(1.467 16)"><rect id="Rectangle_12" data-name="Rectangle 12" width="1.467" height="5.645" transform="matrix(0.515, -0.857, 0.857, 0.515, 3.074, 3.577)" fill="#ffc107"></rect><rect id="Rectangle_13" data-name="Rectangle 13" width="5.645" height="1.467" transform="matrix(0.857, -0.515, 0.515, 0.857, 10.408, 5.221)" fill="#ffc107"></rect><path id="Path_330" data-name="Path 330" d="M34.2,20.4a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,34.2,20.4Z" transform="translate(-32 -16)" fill="#ffc107"></path><path id="Path_331" data-name="Path 331" d="M194.2,116.4a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,194.2,116.4Z" transform="translate(-184.667 -107.6)" fill="#ffc107"></path><path id="Path_332" data-name="Path 332" d="M354.2,20.4a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,354.2,20.4Z" transform="translate(-337.333 -16)" fill="#ffc107"></path></g></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Futures</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Options" className="me-1" id="broker_equity" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_43" data-name="Group 43" transform="translate(1 -14)"><path id="Path_333" data-name="Path 333" d="M35.667,336H32.733a.734.734,0,0,0-.733.733V340.4a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-3.667A.734.734,0,0,0,35.667,336Z" transform="translate(-30.533 -305.867)" fill="#64b5f6"></path><path id="Path_334" data-name="Path 334" d="M195.667,208h-2.933a.734.734,0,0,0-.733.733v9.533a.734.734,0,0,0,.733.733h2.933a.734.734,0,0,0,.733-.733v-9.533A.734.734,0,0,0,195.667,208Z" transform="translate(-183.2 -183.733)" fill="#2196f3"></path><path id="Path_335" data-name="Path 335" d="M355.667,80h-2.933a.722.722,0,0,0-.733.71V95.623a.722.722,0,0,0,.733.71h2.933a.722.722,0,0,0,.733-.71V80.71A.722.722,0,0,0,355.667,80Z" transform="translate(-335.867 -61.067)" fill="#1e88e5"></path><path id="Path_336" data-name="Path 336" d="M74.992,16h-4.4a.733.733,0,0,0,0,1.467h2.63l-9.016,9.014a.734.734,0,0,0,1.038,1.038L74.259,18.5v2.63a.733.733,0,0,0,1.467,0v-4.4A.734.734,0,0,0,74.992,16Z" transform="translate(-61.059)" fill="#ffc107"></path><path id="Path_337" data-name="Path 337" d="M21.267,433.467H.733a.733.733,0,0,1,0-1.467H21.267a.733.733,0,0,1,0,1.467Z" transform="translate(0 -397.467)" fill="#455a64"></path></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Options</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Currency" className="me-1" id="rupee-sign" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><path id="Path_338" data-name="Path 338" d="M149.672,138.672a11,11,0,1,0,11,11A11.012,11.012,0,0,0,149.672,138.672Zm3.251,8.5a.75.75,0,1,1,0,1.5h-1.172a3.246,3.246,0,0,1-2.9,2.246l3.5,2.385a.749.749,0,0,1-.423,1.37.744.744,0,0,1-.422-.13l-5.5-3.75a.751.751,0,0,1,.423-1.371h2.25a1.749,1.749,0,0,0,1.433-.75h-3.683a.75.75,0,0,1,0-1.5h3.918a1.748,1.748,0,0,0-1.668-1.25h-2.25a.75.75,0,0,1,0-1.5h6.5a.75.75,0,0,1,0,1.5H151.4a3.229,3.229,0,0,1,.47,1.25h1.049Z" transform="translate(-137.672 -137.672)" fill="#2196f3"></path></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Currency Futures</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="17" alt="Currency" className="me-1" id="rupee-sign" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><path id="Path_338" data-name="Path 338" d="M149.672,138.672a11,11,0,1,0,11,11A11.012,11.012,0,0,0,149.672,138.672Zm3.251,8.5a.75.75,0,1,1,0,1.5h-1.172a3.246,3.246,0,0,1-2.9,2.246l3.5,2.385a.749.749,0,0,1-.423,1.37.744.744,0,0,1-.422-.13l-5.5-3.75a.751.751,0,0,1,.423-1.371h2.25a1.749,1.749,0,0,0,1.433-.75h-3.683a.75.75,0,0,1,0-1.5h3.918a1.748,1.748,0,0,0-1.668-1.25h-2.25a.75.75,0,0,1,0-1.5h6.5a.75.75,0,0,1,0,1.5H151.4a3.229,3.229,0,0,1,.47,1.25h1.049Z" transform="translate(-137.672 -137.672)" fill="#2196f3"></path></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Currency Options</span>
                </li>
                <li className="px-2 d-flex align-items-center py-2">
                  <svg width="17" height="16" className="me-1" alt="Commodity" id="broker_commodity" viewBox="0 0 24 24"><rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="none"></rect><g id="Group_46" data-name="Group 46" transform="translate(1 1)"><path id="Path_339" data-name="Path 339" d="M51.25.688v5.5h-.687l-5.5,4.125H38.188l-5.5,5.5H32V.688A.681.681,0,0,1,32.688,0H50.563A.681.681,0,0,1,51.25.688Z" transform="translate(-30.625)" fill="#2196f3"></path><path id="Path_340" data-name="Path 340" d="M51.25,144v15.125a.681.681,0,0,1-.687.688H32.688a.681.681,0,0,1-.687-.687v-5.5h.688l5.5-5.5h6.875l5.5-4.125Z" transform="translate(-30.625 -137.813)" fill="#64b5f6"></path><g id="Group_44" data-name="Group 44" transform="translate(2.352 6.325)"><path id="Path_341" data-name="Path 341" d="M58.493,246.913l-3.547,3.547a.688.688,0,0,0,.974.972l3.547-3.548a.688.688,0,0,0-.973-.972Z" transform="translate(-54.744 -242.436)" fill="#fafafa"></path><path id="Path_342" data-name="Path 342" d="M350.127,147.464a.686.686,0,0,0-.962-.138l-3.3,2.475a.687.687,0,1,0,.824,1.1l3.3-2.475A.688.688,0,0,0,350.127,147.464Z" transform="translate(-333.09 -147.189)" fill="#fafafa"></path><path id="Path_343" data-name="Path 343" d="M196.813,224h-4.125a.688.688,0,0,0,0,1.375h4.125a.688.688,0,0,0,0-1.375Z" transform="translate(-186.102 -220.7)" fill="#fafafa"></path></g><g id="Group_45" data-name="Group 45" transform="translate(0 4.4)"><circle id="Ellipse_18" data-name="Ellipse 18" cx="2" cy="2" r="2" transform="translate(0 8.6)" fill="#ffc107"></circle><circle id="Ellipse_19" data-name="Ellipse 19" cx="2" cy="2" r="2" transform="translate(6 3.6)" fill="#ffc107"></circle><circle id="Ellipse_20" data-name="Ellipse 20" cx="2" cy="2" r="2" transform="translate(13 3.6)" fill="#ffc107"></circle><circle id="Ellipse_21" data-name="Ellipse 21" cx="2" cy="2" r="2" transform="translate(18 -0.4)" fill="#ffc107"></circle></g></g></svg>
                  <span className="broker-feature-name fs-14 text-light-black">Commodity</span>
                </li>
              </ul>
              <div className="broker-premium-feature">
                <ul className="d-flex my-2">
                  <li>
                    <span className="title mb-2 d-block">Account Opening Charge</span>
                    <p className="price fw-500 mb-0 text-light-black">Free</p>
                  </li>
                  <li>
                    <span className="title mb-2 d-block">Account Maintenance Charge</span>
                    <p className="price fw-500 mb-0 text-light-black">Free</p>
                  </li>
                  <li>
                    <span className="title mb-2 d-block">Equity Delivery Brokerage</span>
                    <p className="price fw-500 mb-0 text-light-black">₹20 per order or 2.5% (whichever is lower)</p>
                  </li>
                  <li>
                    <span className="title mb-2 d-block">Equity Intra Brokerage</span>
                    <p className="price fw-500 mb-0 text-light-black">0.05%</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <span className="d-block text-center text-dark bg-light p-1 fs-14">Advertisment</span>
          <a href="#"><img src={Advertisements} /></a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TopFiveBrokers