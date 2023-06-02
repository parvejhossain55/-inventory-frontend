import React, { useEffect, useState } from "react";
import girl from "../../../assets/images/girl-1.png";
import { MdOutlineEditOff, MdOutlineDeleteSweep } from "react-icons/md";
import {
  brandCreate,
  brandUpdate,
  deleteBrnad,
  loadAllBrands,
} from "../../../apiRequest/adminApi";
import slugify from "slugify";

const CreateBrand = () => {
  const [brands, setBrands] = useState(null);
  const [update, setUpdate] = useState(false);
  const [oldData, setOldData] = useState({ id: "", image: {} });
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    loadBrands();
  }, []);

  const loadBrands = async () => {
    const brands = await loadAllBrands();
    setBrands(brands);
  };

  const createBrand = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("slug", slugify(name, { lower: true }));
    formData.append("image", image);

    await brandCreate(formData);
    await loadBrands();
    setName("");
    setImage("");
  };

  const handleDelete = async (id) => {
    await deleteBrnad(id);
    loadBrands();
  };

  const updateBrand = (brandId) => {
    const [data] = brands.filter((brand) => brand._id === brandId);
    // console.log("brand data ", data);

    setOldData({ ...oldData, id: data._id, image: data.image });
    setName(data.name);
    setUpdate(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);

    if (image) {
      formData.append("image", image);
      formData.append("old_img", oldData.image);
    }

    await brandUpdate(oldData.id, formData);

    setUpdate(false);
    setName("");
    setImage("");
    setOldData({ id: "", image: {} });
    setUpdate(false);
    loadBrands();
  };

  // const handleDelete = async (e) => {
  //   const { id, public_id, secure_url } = e.target.dataset;
  //   await deleteBrnad({ id, public_id, secure_url });
  //   loadBrands();
  // };

  return (
    <>
      <div className="row">
        <div class="col-lg-7">
          <div class="card">
            <div class="card-header bg-white">
              <h3>Brand List</h3>
            </div>
            <div class="card-body p-0">
              <table class="table">
                <thead>
                  <tr>
                    <th style={{ width: "10px" }}>#</th>
                    <th>Brand Image</th>
                    <th>Brand Name</th>
                    <th style={{ width: "100px", textAlign: "center" }}>
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {brands?.length > 0 ? (
                    brands?.map((brand, i) => (
                      <tr key={i}>
                        <td style={{ verticalAlign: "middle" }}>{i + 1}</td>
                        <td>
                          <img
                            src={`${process.env.REACT_APP_IMAGE_URL}/${brand.image}`}
                            width="50px"
                            height="50px"
                          />
                        </td>

                        <td style={{ verticalAlign: "middle" }}>
                          {brand.name}
                        </td>
                        <td style={{ verticalAlign: "middle", width: "120px" }}>
                          <div class="btn-group">
                            <button
                              onClick={() => updateBrand(brand._id)}
                              class="btn btn-warning"
                            >
                              {/* <MdOutlineEditOff /> */}
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(brand._id)}
                              class="btn btn-outline-danger"
                            >
                              {/* <MdOutlineDeleteSweep /> */}
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <>
                      <div className="card-body ">
                        <p className="text-center">Brand Not Found</p>
                      </div>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="row">
            <div className="col-12">
              {!update ? (
                <>
                  <div class="card mb-3">
                    <div class="card-header bg-white">
                      <h3>Create Brand</h3>
                    </div>
                    <div class="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div class="form-group">
                            <label for="brand_title">Brand Name</label>
                            <input
                              type="text"
                              id="brand_title"
                              class="form-control"
                              placeholder="Brand Title"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div class="form-group">
                            {image && (
                              <div className="text-center">
                                <img
                                  src={URL.createObjectURL(image)}
                                  alt="Product Photo"
                                  className="img img-responsive rounded"
                                  height="150px"
                                />
                              </div>
                            )}
                          </div>
                          <div class="form-group">
                            <label for="brand_image">Brand Image</label>
                            <input
                              type="file"
                              id="brand_image"
                              class="form-control-file"
                              accept="image/*"
                              onChange={(e) => setImage(e.target.files[0])}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer text-muted">
                      <button
                        onClick={createBrand}
                        className="btn btn-outline-primary btn-block"
                      >
                        Create Brand
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div class="card mb-3">
                    <div class="card-header bg-white">
                      <h3>Update Brand</h3>
                    </div>
                    <div class="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div class="form-group">
                            <label for="brand_title">Brand Name</label>
                            <input
                              type="text"
                              id="brand_title"
                              class="form-control"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div class="form-group">
                            {image ? (
                              <div className="text-center">
                                <img
                                  src={URL.createObjectURL(image)}
                                  alt="Product Photo"
                                  className="img img-responsive rounded "
                                  height="150px"
                                />
                              </div>
                            ) : (
                              <div className="text-center">
                                <img
                                  src={oldData.image.secure_url}
                                  alt="Product Photo"
                                  className="img img-responsive rounded "
                                  height="150px"
                                />
                              </div>
                            )}
                          </div>
                          <div class="form-group">
                            <label for="brand_image">Brand Image</label>
                            <input
                              type="file"
                              id="brand_image"
                              class="form-control-file"
                              accept="image/*"
                              onChange={(e) => setImage(e.target.files[0])}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer text-muted">
                      <button
                        onClick={handleUpdate}
                        className="btn btn-outline-primary btn-block"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBrand;
