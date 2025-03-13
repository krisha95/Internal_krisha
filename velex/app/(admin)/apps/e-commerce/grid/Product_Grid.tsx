import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import {
  BiCart,
  BiChevronRight,
  BiSearchAlt,
  BiSolidStar,
  BiSolidStarHalf,
} from "react-icons/bi";
import { products } from "../data";

const Product_Grid = () => {
  return (
    <>
      <div className="row">
        <div className="col-xl-4">
          <div className="card">
            <div className="card-header border-0">
              <div className="search-bar me-3 mb-1">
                <span>
                  <BiSearchAlt />
                </span>
                <input
                  type="search"
                  className="form-control"
                  id="search"
                  placeholder="Search ..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-8">
          <div className="card">
            <div className="card-header border-0">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                <div>
                  <ol className="breadcrumb mb-0 ">
                    <li className="breadcrumb-item fw-medium">
                      <a href="javascript: void(0);" className="text-dark">
                        Categories
                      </a>
                    </li>
                    <BiChevronRight className="active" />
                    All Product
                  </ol>
                  <p className="mb-0 text-muted">
                    Showing all{" "}
                    <span className="text-dark fw-semibold">5,786</span> items
                    results
                  </p>
                </div>

                <div>
                  <div className="d-flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary me-1"
                    >
                      <i className="bx bx-cog me-1"></i>
                      More Setting
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary me-1"
                    >
                      <i className="bx bx-filter-alt me-1"></i>
                      Filters
                    </button>
                    <a
                      href="ecommerce-product-add.html"
                      className="btn btn-success me-1"
                    >
                      <i className="bx bx-plus"></i>
                      New Product
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-xl-4 col-md-6">
              <div className="card">
                <span className="position-absolute top-0 end-0 p-3">
                  <a
                    href="#"
                    className="btn btn-sm btn-soft-danger d-inline-flex align-items-center justify-content-center fs-20"
                  >
                    <Icon icon="solar:heart-outline" width={24} height={24} />
                  </a>
                </span>
                <img
                  src={product.image.src}
                  alt={product.name}
                  className="img-fluid"
                />

                <div className="card-body">
                  <a
                    href="ecommerce-product-details.html"
                    className="text-dark fw-medium fs-16 text-truncate d-block"
                  >
                    {product.name}
                  </a>

                  <div className="my-1">
                    <div className="d-flex gap-2 text-truncate">
                      <span className="d-flex text-warning fs-18">
                        {Array.from({ length: 5 }, (_, index) => {
                          if (index < Math.floor(product.rating)) {
                            return <BiSolidStar key={index} />;
                          } else if (
                            index === Math.floor(product.rating) &&
                            product.rating % 1 !== 0
                          ) {
                            return <BiSolidStarHalf key={index} />;
                          } else {
                            return (
                              <BiSolidStar
                                key={index}
                                style={{ opacity: 0.3 }}
                              />
                            );
                          }
                        })}
                      </span>
                      <p className="fw-medium fs-15 text-dark mb-0">
                        {product.rating}{" "}
                        <span className="text-muted fs-13">
                          ({product.reviews} Review)
                        </span>
                      </p>
                    </div>
                  </div>

                  <hr className="mx-n3" />

                  <div className="d-flex align-items-center mt-3 text-truncate">
                    <h4 className="d-flex align-items-center gap-1 mb-0">
                      ${product.price}{" "}
                      <small className="text-muted">
                        {" "}
                        ({product.discount})
                      </small>
                    </h4>

                    <div className="ms-auto d-flex gap-1">
                      <a href="#" className="btn btn-sm btn-soft-primary">
                        <BiCart className="fs-20" />
                      </a>
                      <a href="#" className="btn btn-sm btn-primary">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-3 border-top">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end mb-0">
            <li className="page-item">
              <a className="page-link" href="javascript:void(0);">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="javascript:void(0);">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="javascript:void(0);">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="javascript:void(0);">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="javascript:void(0);">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Product_Grid;
