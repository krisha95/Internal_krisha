"use client";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Icon } from "@iconify/react";
import p1 from "@/assets/images/product/p-1.png";
import p10 from "@/assets/images/product/p-10.png";
import p13 from "@/assets/images/product/p-13.png";
import p14 from "@/assets/images/product/p-14.png";
import avatar4 from "@/assets/images/users/avatar-4.jpg";
import avatar6 from "@/assets/images/users/avatar-6.jpg";
import {
  BiLike,
  BiSolidCircle,
  BiSolidStar,
  BiSolidStarHalf,
} from "react-icons/bi";

const ProductDetails = () => {
  return (

    <>
      <div className="row">
        <div className="col-xxl-4">
          <div className="card">
            <div className="card-body">
              <div
                id="carouselExampleFade"
                className="carousel position-relative slide carousel-fade"
                data-bs-ride="carousel"
              >
                <h4 className="badge bg-success text-light fs-14 z-3 m-2 py-1 px-2 position-absolute top-0 start-0">
                  New Arrival
                </h4>

                <div className="position-absolute top-0 end-0 m-2 z-3">
                  <button
                    type="button"
                    className="btn btn-soft-danger p-2 d-inline-flex align-items-center justify-content-center fs-20 w-100"
                  >
                    <Icon icon="solar:heart-broken"></Icon>
                  </button>
                </div>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      src={p1.src}
                      alt="product-1"
                      className="img-fluid bg-light w-100 rounded"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={p10.src}
                      alt="product-10"
                      className="img-fluid bg-light w-100 rounded"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={p13.src}
                      alt="product-13"
                      className="img-fluid bg-light w-100 rounded"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={p14.src}
                      alt="product-14"
                      className="img-fluid bg-light w-100 rounded"
                    />
                  </div>
                </div>
                <div className="carousel-indicators m-0 mt-2 d-lg-flex d-none position-static h-100">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide-to="0"
                    aria-current="true"
                    aria-label="Slide 1"
                    className="w-auto h-auto rounded-1 bg-light border-0 active"
                  >
                    <img
                      src={p1.src}
                      className="d-block w-100"
                      alt="swiper-indicator-img"
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    className="w-auto h-auto rounded-1 bg-light border-0"
                  >
                    <img
                      src={p10.src}
                      className="d-block w-100"
                      alt="swiper-indicator-img"
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    className="w-auto h-auto rounded-1 bg-light border-0"
                  >
                    <img
                      src={p13.src}
                      className="d-block w-100"
                      alt="swiper-indicator-img"
                    />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide-to="3"
                    aria-label="Slide 3"
                    className="w-auto h-auto rounded-1 bg-light border-0"
                  >
                    <img
                      src={p14.src}
                      className="d-block w-100"
                      alt="swiper-indicator-img"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="card-footer border-top">
              <div className="d-flex gap-2">
                <a
                  href="#!"
                  className="btn btn-primary d-flex align-items-center justify-content-center gap-2 w-100"
                >
                  <i className="bx bx-cart fs-18"></i> Add To Cart
                </a>

                <a
                  href="#!"
                  className="btn btn-light d-flex align-items-center justify-content-center gap-2 w-100"
                >
                  <i className="bx bx-shopping-bag fs-18"></i> Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-8">
          <div className="card">
            <div className="card-body">
              <p className="mb-1">
                <a href="#!" className="fs-24 text-dark fw-medium">
                  Men Black Slim Fit T-shirt
                </a>
              </p>
              <div className="d-flex gap-2 align-items-center">
                <ul className="d-flex text-warning m-0 fs-20 list-unstyled">
                  {[...Array(4)].map((_, i) => (
                    <li key={i}>
                      <i className="bx bxs-star"></i>
                    </li>
                  ))}
                  <li>
                    <i className="bx bxs-star-half"></i>
                  </li>
                </ul>
                <p className="mb-0 fw-medium fs-18 text-dark">
                  4.5 <span className="text-muted fs-13">(55 Review)</span>
                </p>
              </div>
              <h2 className="fw-medium my-3">
                $80.00{" "}
                <span className="fs-16 text-decoration-line-through">
                  $100.00
                </span>
                <small className="text-danger ms-2">(30%Off)</small>
              </h2>
              <div className="row align-items-center g-2 mt-3">
                <div className="col-lg-3">
                  <div className="">
                    <h5 className="text-dark fw-medium">Colors</h5>
                    <div
                      className="d-flex flex-wrap gap-2"
                      role="group"
                      aria-label="Basic checkbox toggle button group"
                    >
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="color-dark2"
                        checked
                      />
                      <label
                        className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                        htmlFor="color-dark2"
                      >
                        {" "}
                        <BiSolidCircle className="fs-18 text-dark" />
                      </label>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id="color-yellow2"
                      />
                      <label
                        className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                        htmlFor="color-yellow2"
                      >
                        {" "}
                        <BiSolidCircle className="fs-18 text-warning" />
                      </label>

                      <a
                        type="checkbox"
                        className="btn-check"
                        id="color-white2"
                      />
                      <label
                        className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                        htmlFor="color-white2"
                      >
                        <BiSolidCircle className="fs-18 text-white" />
                      </label>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id="color-green2"
                      />
                      <label
                        className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                        htmlFor="color-green2"
                      >
                        <BiSolidCircle className="fs-18 text-success" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="">
                    <h5 className="text-dark fw-medium">Size</h5>
                    <div
                      className="d-flex flex-wrap gap-2"
                      role="group"
                      aria-label="Basic checkbox toggle button group"
                    >
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="size-s2"
                      />
                      <label
                        className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                        htmlFor="size-s2"
                      >
                        S
                      </label>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id="size-m2"
                        checked
                      />
                      <label
                        className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                        htmlFor="size-m2"
                      >
                        M
                      </label>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id="size-xl3"
                      />
                      <label
                        className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                        htmlFor="size-xl3"
                      >
                        Xl
                      </label>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id="size-xxl3"
                      />
                      <label
                        className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                        htmlFor="size-xxl3"
                      >
                        XXL
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="quantity mt-4">
                <h4 className="text-dark fw-medium mt-3">Quantity :</h4>
                <div className="input-step border bg-body-secondary p-1 mt-1 rounded d-inline-flex overflow-visible">
                  <button
                    type="button"
                    className="minus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="text-dark text-center border-0 bg-body-secondary rounded h-100"
                    value="1"
                    min="0"
                    max="100"
                  />
                  <button
                    type="button"
                    className="plus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                  >
                    +
                  </button>
                </div>
              </div>
              <ul className="d-flex flex-column gap-2 list-unstyled fs-15 my-3">
                <li>
                  <i className="bx bx-check text-success"></i> In Stock
                </li>
                <li>
                  <i className="bx bx-check text-success"></i> Free delivery
                  available
                </li>
                <li>
                  <i className="bx bx-check text-success"></i> Sales 10% Off Use
                  Code: <span className="text-dark fw-medium">CODE123</span>
                </li>
              </ul>
              <h4 className="text-dark fw-medium mt-3">Available offers :</h4>
              <div className="d-flex align-items-center mt-2">
                <i className="bx bxs-bookmarks text-success me-3 fs-20 mt-1"></i>
                <p className="mb-0">
                  <span className="fw-medium text-dark">Bank Offer</span> 10%
                  instant discount on Bank Debit Cards, up to $30 on orders of
                  $50 and above
                </p>
              </div>
              <div className="d-flex align-items-center mt-2">
                <i className="bx bxs-bookmarks text-success me-3 fs-20 mt-1"></i>
                <p className="mb-0">
                  <span className="fw-medium text-dark">Bank Offer</span> Grab
                  our exclusive offer now and save 20% on your next purchase!
                  Don't miss out, shop today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="card bg-light-subtle">
            <div className="card-body">
              <div className="row g-4">
                {[
                  {
                    icon: "solar:kick-scooter-bold-duotone",
                    title: "Free shipping for all orders over $200",
                    description: "Only in this week",
                  },
                  {
                    icon: "solar:ticket-bold-duotone",
                    title: "Special discounts for customers",
                    description: "Coupons up to $ 100",
                  },
                  {
                    icon: "solar:gift-bold-duotone",
                    title: "Free gift wrapping",
                    description: "With 100 letters custom note",
                  },
                  {
                    icon: "solar:headphones-round-sound-bold-duotone",
                    title: "Expert Customer Service",
                    description: "8:00 - 20:00, 7 days/week",
                  },
                ].map((item, i) => (
                  <div key={i} className="col-xxl-3 col-lg-6">
                    <div className="d-flex gap-3">
                      <div className="avatar bg-light d-flex align-items-center justify-content-center rounded">
                        <Icon icon={item.icon} className="fs-35 text-primary" />
                      </div>
                      <div>
                        <p className="text-dark fw-medium fs-16 mb-1">
                          {item.title}
                        </p>
                        <p className="mb-0">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xxl-8">
          <div className="card">
            <div className="card-header text-white">
              <h4 className="card-title mb-0">Items Detail</h4>
            </div>
            <div className="card-body p-0">
              <Table striped bordered hover>
                <tbody>
                  {[
                    {
                      label: "Product Dimensions",
                      value: "53.3 x 40.6 x 6.4 cm; 500 Grams",
                    },
                    {
                      label: "Date First Available",
                      value: "22 September 2023",
                    },
                    { label: "Department", value: "Men" },
                    {
                      label: "Manufacturer",
                      value: "Greensboro, NC 27401 Prospa-Pal",
                    },
                    { label: "ASIN", value: "B0CJMML118" },
                    { label: "Item Model Number", value: "1137AZ" },
                    { label: "Country of Origin", value: "U.S.A" },
                    {
                      label: "Manufacturer Address",
                      value:
                        "Suite 941 89157 Baumbach Views, Gilbertmouth, TX 31542-2135",
                    },
                    {
                      label: "Packer",
                      value: "Apt. 726 80915 Hung Stream, Rowetown, WV 44364",
                    },
                    {
                      label: "Importer",
                      value: "Apt. 726 80915 Hung Stream, Rowetown, WV 44364",
                    },
                    { label: "Item Weight", value: "500 g" },
                    {
                      label: "Item Dimensions LxWxH",
                      value: "53.3 x 40.6 x 6.4 Centimeters",
                    },
                    { label: "Generic Name", value: "T-Shirt" },
                    {
                      label: "Best Sellers Rank",
                      value: "#13 in Clothing & Accessories",
                    },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="text-dark fw-semibold">{row.label}</td>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="p-3">
                <a href="#!" className="text-primary text-decoration-underline">
                  View More Details{" "}
                  <i className="bi bi-arrow-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Top Review From World</h4>
            </div>
            <div className="card-body">
              {[
                {
                  image: avatar6,
                  name: "Henny K. Mark",
                  rating: 4.5,
                  review: "Excellent Quality",
                  date: "Reviewed in Canada on 16 November 2023",
                  comment:
                    "Great quality! Medium thickness, good elasticity, and no shrinkage after wash. XL size fits perfectly for a 5'10\" heavy build. Highly recommended, especially at this price.",
                },
                {
                  image: avatar4,
                  name: "Jorge Herry",
                  rating: 4,
                  review: "Good Quality",
                  date: "Reviewed in U.S.A on 21 December 2023",
                  comment:
                    "Lightweight and fits true to size. Only the maroon color faded slightly in the first wash, but overall, very satisfied with the purchase",
                },
                {
                  image: avatar6,
                  name: "Henny K. Mark",
                  rating: 4.5,
                  review: "Excellent Quality",
                  date: "Reviewed in Canada on 16 November 2023",
                  comment:
                    "Comfortable and durable. Maintained its color and shape after multiple washes. Great value for the price",
                },
              ].map((review, i) => (
                <div key={i}>
                  <div className="d-flex gap-2">
                    <img
                      src={review.image.src}
                      alt="User Avatar"
                      width={40}
                      height={40}
                      className="avatar-sm rounded"
                    />
                    <div>
                      <h5 className="mb-0">{review.name}</h5>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2 mt-3 mb-1">
                    <ul className="d-flex text-warning m-0 fs-20 list-unstyled">
                      {[...Array(Math.floor(review.rating))].map((_, i) => (
                        <li key={i}>
                          <BiSolidStar />
                        </li>
                      ))}
                      {review.rating % 1 !== 0 && (
                        <li>
                          <BiSolidStarHalf />
                        </li>
                      )}
                    </ul>
                    <p className="fw-medium mb-0 text-dark fs-15">
                      {review.review}
                    </p>
                  </div>
                  <p className="mb-0 text-dark fw-medium fs-15">
                    {review.date}
                  </p>
                  <p className="text-muted">{review.comment}</p>
                  <div className="mt-2">
                    <a href="#!" className="fs-14 me-3 text-muted">
                      <i>
                        <BiLike />
                      </i>
                      Helpful
                    </a>
                    <a href="#!" className="fs-14 text-muted">
                      Report
                    </a>
                  </div>
                  {i < 2 && <hr className="my-3" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
