import React, { useEffect, useState } from "react";
import girl from "../../../assets/images/girl-1.png";
import { MdOutlineEditOff, MdOutlineDeleteSweep } from "react-icons/md";
import {
  categoryCreate,
  deleteCategory,
  loadAllCategories,
  categoryUpdate,
} from "../../../apiRequest/adminApi";

const CreateCategory = () => {
  const [categories, setCategory] = useState(null);
  const [update, setUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const categories = await loadAllCategories();
    setCategory(categories);
  };

  const handleDelete = async (id) => {
    await deleteCategory(id);
    await loadCategories();
  };

  const createCategory = async () => {
    await categoryCreate({ name, slug });
    setName("");
    setSlug("");
    await loadCategories();
  };

  const updateCategory = (catId) => {
    const [data] = categories.filter((category) => category._id === catId);
    setUpdateId(data._id);
    setName(data.name);
    setSlug(data.slug);
    setUpdate(true);
  };

  const handleUpdate = async () => {
    await categoryUpdate(updateId, { name, slug });
    setUpdate(false);
    setName("");
    setSlug("");
    setUpdateId(null);
    loadCategories();
  };

  return (
    <>
      <div className="row">
        <div class="col-lg-7">
          <div class="card">
            <div class="card-header bg-white">
              <h3>Category List</h3>
            </div>

            <div class="card-body p-0">
              <table class="table table-hover text-center">
                <thead>
                  <tr>
                    <th style={{ width: "10px" }}>#</th>
                    {/* <th>Image</th> */}
                    <th>Name</th>
                    <th>Slug</th>
                    <th style={{ width: "100px", textAlign: "center" }}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.length > 0 ? (
                    categories.map((category, i) => (
                      <tr key={i}>
                        <td style={{ verticalAlign: "middle" }}>{i + 1}</td>
                        {/* <td>
                          <img src={girl} width="50px" height="50px" />
                        </td> */}
                        <td style={{ verticalAlign: "middle" }}>
                          {category.name}
                        </td>
                        <td style={{ verticalAlign: "middle" }}>
                          {category.slug}
                        </td>
                        <td style={{ verticalAlign: "middle", width: "120px" }}>
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-outline-primary"
                              onClick={() => updateCategory(category._id)}
                            >
                              <MdOutlineEditOff />
                            </button>
                            <button
                              type="button"
                              class="btn btn-outline-danger"
                              onClick={() => handleDelete(category._id)}
                            >
                              <MdOutlineDeleteSweep />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <>
                      {" "}
                      <p>Category Not Found</p>
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
                      <h3>Create Category</h3>
                    </div>
                    <div class="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div class="form-group">
                            <label for="brand_title">Category Name</label>
                            <input
                              type="text"
                              id="brand_title"
                              class="form-control"
                              placeholder="Category Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div class="form-group">
                            <label for="brand_title">Category Slug</label>
                            <input
                              type="text"
                              name="name"
                              id="brand_title"
                              class="form-control"
                              placeholder="Category Slug"
                              value={slug}
                              onChange={(e) => setSlug(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer text-muted">
                      <button
                        onClick={createCategory}
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
                      <h3>Update Category</h3>
                    </div>
                    <div class="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div class="form-group">
                            <label for="category_title">Category Name</label>
                            <input
                              type="text"
                              name="name"
                              id="category_title"
                              class="form-control"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div class="form-group">
                            <label for="brand_title">Category Slug</label>
                            <input
                              type="text"
                              name="name"
                              id="brand_title"
                              class="form-control"
                              value={slug}
                              onChange={(e) => setSlug(e.target.value)}
                            />
                          </div>
                          {/*<div class="form-group py-3">
                            <img src={girl} width={"150px"} height={"150px"} />
                          </div>
                           <div class="form-group">
                            <label for="brand_image">Category Image</label>
                            <input
                              type="file"
                              name="image"
                              id="brand_image"
                              class="form-control-file"
                            />
                          </div> */}
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

export default CreateCategory;
