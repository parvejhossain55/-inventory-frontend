import React, { useEffect, useState } from "react";
import EditorSetup from "./Editor";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import useCategory from "../../../hooks/useCategory";
import useBrand from "../../../hooks/useBrand";
import { UpdateProduct } from "../../../apiRequest/adminApi";
import slugify from "slugify";
import { useNavigate, useParams } from "react-router-dom";
import { loadProductBySlug } from "../../../apiRequest";

const createOption = (label) => ({
  label,
  value: label,
});

const sizeOptions = [
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
];

const EditProduct = () => {
  // tagValue state use only for creatable select helper
  const [tagValue, setTagsValue] = useState("");

  // define product state
  const [title, setTitle] = useState("");
  const [slugName, setSlugName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [price, setPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState([]);
  const [unit, setUnit] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [images, setImages] = useState("");
  const [oldImg, setOldImg] = useState({ public_id: "", secure_url: "" });
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState("");

  // product id
  const { slug } = useParams();
  const navigate = useNavigate();

  // load all brands and category via hook
  const categories = useCategory();
  const brands = useBrand();

  useEffect(() => {
    getProductBySlug();
  }, []);

  const getProductBySlug = async () => {
    const data = await loadProductBySlug(slug);
    setTitle(data.title);
    setSlugName(data.slug);
    setDescription(data.description);
    setPrice(data.price);
    setSalePrice(data.salePrice);
    setQuantity(data.quantity);
    setSize(data.size);
    setUnit(data.unit);
    setType(data.type);
    setStatus(data.status);
    setOldImg({
      public_id: data.image.public_id,
      secure_url: data.image.secure_url,
    });
    setCategory(data.category);
    setBrand(data.brand);
  };

  const handleKeyDown = (event) => {
    if (!tagValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setTags((prev) => [...prev, createOption(tagValue)]);
        setTagsValue("");
        event.preventDefault();
    }
  };

  const handleUpdateProduct = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slugify(title, { lower: true }));
    formData.append("description", description);
    formData.append("tags", tags);
    formData.append("price", price);
    formData.append("salePrice", salePrice);
    formData.append("quantity", quantity);
    formData.append("size", size);
    formData.append("unit", unit);
    formData.append("type", type);
    formData.append("status", status);
    formData.append("public_id", oldImg.public_id);
    images && formData.append("image", images);
    formData.append("category", category);
    formData.append("brand", brand);

    // const product = Object.fromEntries(formData)
    const product = await UpdateProduct(slugName, formData);
    if (product) {
      navigate("/dashboard/products");
    }
  };

  return (
    <>
      <div class="row d-flex justify-content-between mb-3">
        <div class="col-auto">
          <h2 class="mb-2 text-bold">Update Product</h2>
        </div>
        <div class="col-auto mt-2">
          <button
            onClick={handleUpdateProduct}
            class="btn btn-outline-primary mb-2 mb-sm-0"
          >
            Update Product
          </button>
        </div>
      </div>

      <div className="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-header bg-white">
              <h3>Basic Information</h3>
            </div>
            <div class="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div class="form-group">
                    <label for="product_title">Title</label>
                    <input
                      type="text"
                      id="product_title"
                      class="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Product Title"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div class="form-group">
                    <label for="description">Description</label>
                    <EditorSetup
                      description={description}
                      handleDescription={setDescription}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="">Price</label>
                        <input
                          type="number"
                          class="form-control"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          placeholder="Enter Product Price"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label for="">Sale Price</label>
                        <input
                          type="number"
                          class="form-control"
                          value={salePrice}
                          onChange={(e) => setSalePrice(e.target.value)}
                          placeholder="Enter Product Sale Price"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6">
                      <div class="form-group">
                        <label>Quantity</label>
                        <input
                          type="number"
                          class="form-control"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          placeholder="Enter Product Quantity"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label>Unit</label>
                        <select
                          onChange={(e) => setUnit(e.target.value)}
                          class="form-select mb-3"
                        >
                          <option>Select Unit</option>
                          <option value="kg">KG</option>
                          <option value="pc">PC</option>
                          <option value="gm">GM</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-group">
                    <label>Product Size</label>
                    <Select
                      onChange={(size) => setSize(size)}
                      isMulti
                      options={sizeOptions}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-group">
                    <label>Product Status</label>
                    <select
                      onChange={(e) => setStatus(e.target.value)}
                      class="form-select mb-3"
                    >
                      <option>Select Status</option>
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-12">
              <div class="card mb-3">
                <div class="card-header bg-white">
                  <h3>Organize</h3>
                </div>
                <div class="card-body">
                  <div class="row g-3">
                    <div class="col-12 col-sm-6 col-xl-12">
                      <div class="mb-2">
                        <h5>Category</h5>
                      </div>
                      <select
                        onChange={(e) => setCategory(e.target.value)}
                        class="form-select mb-3"
                      >
                        <option>Select Category</option>
                        {categories?.map((category) => (
                          <option value={category._id} key={category._id}>
                            {category.name}
                          </option>
                        ))}
                        {/* <option value="men-cloth">Men's Clothing</option>
                        <option value="women-cloth">Womens's Clothing</option>
                        <option value="kid-cloth">Kid's Clothing</option> */}
                      </select>
                    </div>
                    <div class="col-12 col-sm-6 col-xl-12">
                      <div class="mb-2">
                        <h5>Brand</h5>
                      </div>
                      <select
                        onChange={(e) => setBrand(e.target.value)}
                        class="form-select mb-3"
                      >
                        <option>Select Brand</option>
                        {brands.map((brand) => (
                          <option value={brand._id} key={brand._id}>
                            {brand.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="col-12 col-sm-6 col-xl-12">
                      <div className="mb-4">
                        <div class="d-flex flex-wrap mb-2">
                          <h5 class="mb-0 text-1000 me-2">Tags</h5>
                        </div>
                        <CreatableSelect
                          components={{ DropdownIndicator: null }}
                          isClearable
                          isMulti
                          menuIsOpen={false}
                          value={tags}
                          onChange={(newValue) => setTags(newValue)}
                          inputValue={tagValue}
                          onInputChange={(newValue) => setTagsValue(newValue)}
                          onKeyDown={handleKeyDown}
                          placeholder="Type tag names and press enter..."
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-6 col-xl-12">
                      <div className="mb-4">
                        <div class="mb-2">
                          <h5>Product Type</h5>
                        </div>
                        <select
                          onChange={(e) => setType(e.target.value)}
                          class="form-select mb-3"
                        >
                          <option>Select Product Type</option>
                          <option value="new">New</option>
                          <option value="feature">Feature</option>
                          <option value="sale">Sale</option>
                          <option value="bestdeal">Best Deals</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      {!images && oldImg && (
                        <div class="form-group">
                          <div className="text-center">
                            <img
                              src={oldImg.secure_url}
                              alt="Product Photo"
                              className="img img-responsive"
                              height="150px"
                            />
                          </div>
                        </div>
                      )}
                      {images && (
                        <div class="form-group">
                          <div className="text-center">
                            <img
                              src={URL.createObjectURL(images)}
                              alt="Product Photo"
                              className="img img-responsive"
                              height="150px"
                            />
                          </div>
                        </div>
                      )}
                      <div class="form-group">
                        <label for="product_image">Product Image</label>
                        <input
                          type="file"
                          class="form-control-file"
                          accept="image/*"
                          onChange={(e) => setImages(e.target.files[0])}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
