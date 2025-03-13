"use client";
import React, { useState, useRef } from "react";
import { BiCloudUpload } from "react-icons/bi";

const ProductCreate = () => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [categoryTitle, setCategoryTitle] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [stock, setStock] = useState("");
  const [tagId, setTagId] = useState("");
  const [description, setDescription] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaTag, setMetaTag] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
    }
  };
  const handleFileRemove = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Add Thumbnail Photo</h4>
        </div>
        <div className="card-body">
          <div className="dropzone bg-light-subtle py-5">
            <div className="fallback">
              <input
                name="file"
                type="file"
                multiple
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
            <div
              className="dz-message needsclick"
              onClick={handleFileInputClick}
            >
              <i className="fs-48 text-primary">
                <BiCloudUpload className="fs-48 text-primary" />
              </i>
              <h3 className="mt-4">
                Drop your images here, or{" "}
                <span className="text-primary" style={{ cursor: "pointer" }}>
                  click to browse
                </span>
              </h3>
              <span className="text-muted fs-13">
                1600 x 1200 (4:3) recommended. PNG, JPG, and GIF files are
                allowed
              </span>
            </div>
          </div>

          {files.length > 0 && (
            <ul className="list-unstyled mb-0" id="dropzone-preview">
              {files.map((file, index) => (
                <li className="mt-2" key={index}>
                  <div className="border rounded">
                    <div className="d-flex p-2">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar-sm bg-light rounded">
                          <img
                            src={URL.createObjectURL(file)}
                            alt="file preview"
                            className="img-fluid rounded d-block"
                            style={{
                              width: "100px",
                              height: "36px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="pt-1">
                          <h5 className="fs-14 mb-1">{file.name}</h5>
                          <p className="fs-13 text-muted mb-0">
                            {file.size} bytes
                          </p>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ms-3">
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleFileRemove(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">General Information</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="category-title" className="form-label">
                  Category Title
                </label>
                <input
                  type="text"
                  id="category-title"
                  className="form-control"
                  placeholder="Enter Title"
                  value={categoryTitle}
                  onChange={(e) => setCategoryTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <label htmlFor="crater" className="form-label">
                Created By
              </label>
              <select
                className="form-control"
                id="crater"
                value={createdBy}
                onChange={(e) => setCreatedBy(e.target.value)}
              >
                <option value="">Select Creator</option>
                <option value="Seller">Seller</option>
                <option value="Admin">Admin</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="product-stock" className="form-label">
                  Stock
                </label>
                <input
                  type="number"
                  id="product-stock"
                  className="form-control"
                  placeholder="Quantity"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="product-id" className="form-label">
                  Tag ID
                </label>
                <input
                  type="text"
                  id="product-id"
                  className="form-control"
                  placeholder="#******"
                  value={tagId}
                  onChange={(e) => setTagId(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="mb-0">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control bg-light-subtle"
                  id="description"
                  placeholder="Type description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Meta Options</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="meta-title" className="form-label">
                  Meta Title
                </label>
                <input
                  type="text"
                  id="meta-title"
                  className="form-control"
                  placeholder="Enter Title"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="meta-tag" className="form-label">
                  Meta Tag Keyword
                </label>
                <input
                  type="text"
                  id="meta-tag"
                  className="form-control"
                  placeholder="Enter word"
                  value={metaTag}
                  onChange={(e) => setMetaTag(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="mb-0">
                <label htmlFor="meta-description" className="form-label">
                  Meta Description
                </label>
                <textarea
                  className="form-control bg-light-subtle"
                  id="meta-description"
                  placeholder="Type description"
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCreate;
