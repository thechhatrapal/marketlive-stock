import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blog4 from "../assets/blog-4.jpg";
import Blog3 from "../assets/blog-3.webp";
import Blog2 from "../assets/blog-2.webp";
import axios from "axios";

const BlogListing = () => {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((res) => setBlogs(res.data.blogs))
      .catch((err) => console.log(err));
  }, []);
  const NextArrow = ({ onClick }) => (
    <button
      className="z-1 absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
      onClick={onClick}
    >
      &gt;
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      className="z-1 absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
      onClick={onClick}
    >
      &lt;
    </button>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section class="container my-4 blog-section my-5" id="blogSection">
      <h3 class="text-center text-dark mb-2 text-2xl font-bold">Blog</h3>
      <p class="sub-title text-center mb-4">Daily Insights from NiftyTrader</p>
      <Slider {...settings}>
        <div className="blog-slides space-x-2 ">
          <div class="swiper-slide d-flex align-items-center justify-content-center">
            <div class="card-wrap border-0 shadow-sm p-3">
              <a href="#" class="blog-post d-block">
                <img src={Blog4} alt="" class="blog-img mb-4" />
                <h2 class="blog-title text-light-black mb-4">
                  Indian Equity Hits New Highs in Volatile Session
                </h2>
                <div class="d-flex align-items-center mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="clock"
                    class="svg-inline--fa fa-clock fa-w-16 me-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="16"
                    height="16"
                  >
                    <path
                      fill="text-light-black"
                      d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                    ></path>
                  </svg>
                  <span class="blog-date text-light-black fw-500">
                    Dec 11, 2023
                  </span>
                </div>
                <p class="blog-card-text">
                  Today, the NSE Nifty 50 commenced positively, marking a 0.13
                  percent increase before concluding the day in green territory,
                  hovering around the 21000 mark.
                </p>
                <a href="#" class="blog-read-more-text fs-14 text-primary">
                  Read More
                </a>
              </a>
            </div>
          </div>
          <div class="swiper-slide d-flex align-items-center justify-content-center">
            <div class="card-wrap border-0 shadow-sm p-3">
              <a href="#" class="blog-post d-block">
                <img src={Blog3} alt="" class="blog-img mb-4" />
                <h2 class="blog-title text-light-black mb-4">
                  Indian Equity Hits New Highs in Volatile Session
                </h2>
                <div class="d-flex align-items-center mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="clock"
                    class="svg-inline--fa fa-clock fa-w-16 me-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="16"
                    height="16"
                  >
                    <path
                      fill="text-light-black"
                      d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                    ></path>
                  </svg>
                  <span class="blog-date text-light-black fw-500">
                    Dec 11, 2023
                  </span>
                </div>
                <p class="blog-card-text">
                  Today, the NSE Nifty 50 commenced positively, marking a 0.13
                  percent increase before concluding the day in green territory,
                  hovering around the 21000 mark.
                </p>
                <a href="#" class="blog-read-more-text fs-14 text-primary">
                  Read More
                </a>
              </a>
            </div>
          </div>
          <div class="swiper-slide d-flex align-items-center justify-content-center">
            <div class="card-wrap border-0 shadow-sm p-3">
              <a href="#" class="blog-post d-block">
                <img src={Blog2} alt="" class="blog-img mb-4" />
                <h2 class="blog-title text-light-black mb-4">
                  Indian Equity Hits New Highs in Volatile Session
                </h2>
                <div class="d-flex align-items-center mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="clock"
                    class="svg-inline--fa fa-clock fa-w-16 me-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="16"
                    height="16"
                  >
                    <path
                      fill="text-light-black"
                      d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                    ></path>
                  </svg>
                  <span class="blog-date text-light-black fw-500">
                    Dec 11, 2023
                  </span>
                </div>
                <p class="blog-card-text">
                  Today, the NSE Nifty 50 commenced positively, marking a 0.13
                  percent increase before concluding the day in green territory,
                  hovering around the 21000 mark.
                </p>
                <a href="#" class="blog-read-more-text fs-14 text-primary">
                  Read More
                </a>
              </a>
            </div>
          </div>
        </div>
        {/* Repeat similar structure for other slides */}

        {/* Slide 2 */}
        <div className="blog-slides space-x-2 ">
          <div class="swiper-slide d-flex align-items-center justify-content-center">
            <div class="card-wrap border-0 shadow-sm p-3">
              <a href="#" class="blog-post d-block">
                <img src={Blog4} alt="" class="blog-img mb-4" />
                <h2 class="blog-title text-light-black mb-4">
                  Indian Equity Hits New Highs in Volatile Session
                </h2>
                <div class="d-flex align-items-center mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="clock"
                    class="svg-inline--fa fa-clock fa-w-16 me-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="16"
                    height="16"
                  >
                    <path
                      fill="text-light-black"
                      d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                    ></path>
                  </svg>
                  <span class="blog-date text-light-black fw-500">
                    Dec 11, 2023
                  </span>
                </div>
                <p class="blog-card-text">
                  Today, the NSE Nifty 50 commenced positively, marking a 0.13
                  percent increase before concluding the day in green territory,
                  hovering around the 21000 mark.
                </p>
                <a href="#" class="blog-read-more-text fs-14 text-primary">
                  Read More
                </a>
              </a>
            </div>
          </div>
          <div class="swiper-slide d-flex align-items-center justify-content-center">
            <div class="card-wrap border-0 shadow-sm p-3">
              <a href="#" class="blog-post d-block">
                <img src={Blog3} alt="" class="blog-img mb-4" />
                <h2 class="blog-title text-light-black mb-4">
                  Indian Equity Hits New Highs in Volatile Session
                </h2>
                <div class="d-flex align-items-center mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="clock"
                    class="svg-inline--fa fa-clock fa-w-16 me-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="16"
                    height="16"
                  >
                    <path
                      fill="text-light-black"
                      d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                    ></path>
                  </svg>
                  <span class="blog-date text-light-black fw-500">
                    Dec 11, 2023
                  </span>
                </div>
                <p class="blog-card-text">
                  Today, the NSE Nifty 50 commenced positively, marking a 0.13
                  percent increase before concluding the day in green territory,
                  hovering around the 21000 mark.
                </p>
                <a href="#" class="blog-read-more-text fs-14 text-primary">
                  Read More
                </a>
              </a>
            </div>
          </div>
          <div class="swiper-slide d-flex align-items-center justify-content-center">
            <div class="card-wrap border-0 shadow-sm p-3">
              <a href="#" class="blog-post d-block">
                <img src={Blog2} alt="" class="blog-img mb-4" />
                <h2 class="blog-title text-light-black mb-4">
                  Indian Equity Hits New Highs in Volatile Session
                </h2>
                <div class="d-flex align-items-center mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="clock"
                    class="svg-inline--fa fa-clock fa-w-16 me-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="16"
                    height="16"
                  >
                    <path
                      fill="text-light-black"
                      d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                    ></path>
                  </svg>
                  <span class="blog-date text-light-black fw-500">
                    Dec 11, 2023
                  </span>
                </div>
                <p class="blog-card-text">
                  Today, the NSE Nifty 50 commenced positively, marking a 0.13
                  percent increase before concluding the day in green territory,
                  hovering around the 21000 mark.
                </p>
                <a href="#" class="blog-read-more-text fs-14 text-primary">
                  Read More
                </a>
              </a>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="blog-slides space-x-2 ">
          <div class="swiper-slide d-flex align-items-center justify-content-center">
            <div class="card-wrap border-0 shadow-sm p-3">
              <a href="#" class="blog-post d-block">
                <img src={Blog4} alt="" class="blog-img mb-4" />
                <h2 class="blog-title text-light-black mb-4">
                  Indian Equity Hits New Highs in Volatile Session
                </h2>
                <div class="d-flex align-items-center mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="clock"
                    class="svg-inline--fa fa-clock fa-w-16 me-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="16"
                    height="16"
                  >
                    <path
                      fill="text-light-black"
                      d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                    ></path>
                  </svg>
                  <span class="blog-date text-light-black fw-500">
                    Dec 11, 2023
                  </span>
                </div>
                <p class="blog-card-text">
                  Today, the NSE Nifty 50 commenced positively, marking a 0.13
                  percent increase before concluding the day in green territory,
                  hovering around the 21000 mark.
                </p>
                <a href="#" class="blog-read-more-text fs-14 text-primary">
                  Read More
                </a>
              </a>
            </div>
          </div>
          <div class="swiper-slide d-flex align-items-center justify-content-center">
            <div class="card-wrap border-0 shadow-sm p-3">
              <a href="#" class="blog-post d-block">
                <img src={Blog3} alt="" class="blog-img mb-4" />
                <h2 class="blog-title text-light-black mb-4">
                  Indian Equity Hits New Highs in Volatile Session
                </h2>
                <div class="d-flex align-items-center mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="clock"
                    class="svg-inline--fa fa-clock fa-w-16 me-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="16"
                    height="16"
                  >
                    <path
                      fill="text-light-black"
                      d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                    ></path>
                  </svg>
                  <span class="blog-date text-light-black fw-500">
                    Dec 11, 2023
                  </span>
                </div>
                <p class="blog-card-text">
                  Today, the NSE Nifty 50 commenced positively, marking a 0.13
                  percent increase before concluding the day in green territory,
                  hovering around the 21000 mark.
                </p>
                <a href="#" class="blog-read-more-text fs-14 text-primary">
                  Read More
                </a>
              </a>
            </div>
          </div>
          <div class="swiper-slide d-flex align-items-center justify-content-center">
            <div class="card-wrap border-0 shadow-sm p-3">
              <a href="#" class="blog-post d-block">
                <img src={Blog2} alt="" class="blog-img mb-4" />
                <h2 class="blog-title text-light-black mb-4">
                  Indian Equity Hits New Highs in Volatile Session
                </h2>
                <div class="d-flex align-items-center mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="clock"
                    class="svg-inline--fa fa-clock fa-w-16 me-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="16"
                    height="16"
                  >
                    <path
                      fill="text-light-black"
                      d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                    ></path>
                  </svg>
                  <span class="blog-date text-light-black fw-500">
                    Dec 11, 2023
                  </span>
                </div>
                <p class="blog-card-text">
                  Today, the NSE Nifty 50 commenced positively, marking a 0.13
                  percent increase before concluding the day in green territory,
                  hovering around the 21000 mark.
                </p>
                <a href="#" class="blog-read-more-text fs-14 text-primary">
                  Read More
                </a>
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default BlogListing;
