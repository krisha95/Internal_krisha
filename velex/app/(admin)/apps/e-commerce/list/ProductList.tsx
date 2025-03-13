"use client";
import React, { useState } from "react";
import { Item, products } from "../data";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Dropdown } from "react-bootstrap";
import { BiChevronDown } from "react-icons/bi";

const ProductList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center gap-1">
              <h4 className="card-title flex-grow-1">All Product List</h4>

              <a href="product-add.html" className="btn btn-sm btn-primary">
                Add Product
              </a>

              <Dropdown show={isOpen} onToggle={toggleDropdown}>
                <Dropdown.Toggle
                  variant="outline-light"
                  id="dropdown-custom-components"
                >
                  This Month
                  <BiChevronDown />
                </Dropdown.Toggle>

                <Dropdown.Menu align="end">
                  <Dropdown.Item href="#!">Download</Dropdown.Item>
                  <Dropdown.Item href="#!">Export</Dropdown.Item>
                  <Dropdown.Item href="#!">Import</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table align-middle mb-0 table-hover table-centered">
            <thead className="bg-light-subtle">
              <tr>
                <th style={{ width: "20px" }}>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheckAll"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customCheckAll"
                    ></label>
                  </div>
                </th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Create by</th>
                <th>ID</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "white" }}>
              {products.map((product: Item) => (
                <tr key={product.id}>
                  <td>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`customCheck${product.id}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`customCheck${product.id}`}
                      ></label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                        <img
                          src={product.image.src}
                          alt={product.name}
                          className="avatar-md"
                        />
                      </div>
                      <p className="text-dark fw-medium fs-15 mb-0">
                        {product.name}
                      </p>
                    </div>
                  </td>
                  <td>
                    ${product.price}{" "}
                    <small className="text-muted">({product.discount})</small>
                  </td>
                  <td>{product.seller}</td>
                  <td>{product.productCode}</td>
                  <td>{product.stock}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <a href="#!" className="btn btn-light btn-sm">
                        <Icon
                          icon="solar:eye-broken"
                          className="align-middle fs-18"
                        />
                      </a>
                      <a href="#!" className="btn btn-soft-primary btn-sm">
                        <Icon
                          icon="solar:pen-2-broken"
                          className="align-middle fs-18"
                        />
                      </a>
                      <a href="#!" className="btn btn-soft-danger btn-sm">
                        <Icon
                          icon="solar:trash-bin-minimalistic-2-broken"
                          className="align-middle fs-18"
                        />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

export default ProductList;
