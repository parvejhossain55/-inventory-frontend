import axios from "axios";
import { toast } from "react-toastify";

const auth = localStorage.getItem("auth");
const data = JSON.parse(auth);
const token = data?.token;

// set axios default value
axios.defaults.baseURL = process.env.REACT_APP_API;
const headers = { headers: { Authorization: "Bearer " + token } };
// axios.defaults.headers.common["Authorization"] = "Bearer " + token;

export const categoryCreate = async (category) => {
  const { data } = await axios.post(`/category`, category, headers);
  return data;
};

export const loadAllCategories = async () => {
  const { data } = await axios.get(`/category`);
  return data;
};

export const categoryUpdate = async (id, category) => {
  const { data } = await axios.put(`/category/${id}`, category, headers);
  toast.success(data.message);
  return data;
};

export const deleteCategory = async (id) => {
  const { data } = await axios.delete(`/category/${id}`, headers);
  toast.success(data.message);
};

// Brand Api Call
export const loadAllBrands = async () => {
  const { data } = await axios.get("brand");
  return data;
};

export const brandCreate = async (brand) => {
  const { data } = await axios.post(`/brand`, brand, headers);
  return data;
};

export const deleteBrnad = async ({ brandId, public_id }) => {
  const { data } = await axios.delete(
    `/brand/${brandId}?public_id=${public_id}`,
    headers
  );
  toast.success(data.message);
  return data;
};

export const brandUpdate = async (id, brand) => {
  const { data } = await axios.put(`/brand/${id}`, brand, headers);
  toast.success(data.message);
  return data;
};

// Product Api Call
export const createProduct = async (product) => {
  const { data } = await axios.post("/products", product, headers);
  toast.success(data.message);
  return data;
};

// delete barnad data
// export const deleteBrnad = async ({ id, public_id, secure_url }) => {
//   const { data } = await axios.delete(
//     `/brand/${id}/?public_id=${public_id}`,
//     headers
//   );
//   toast.success(data.message);
// };

export const AllProductsData = async () => {
  const { data } = await axios.get("/products");
  return data;
};

export const UpdateProduct = async (slug, formdata) => {
  const { data } = await axios.patch(`/products/${slug}`, formdata, headers);
  toast.success(data.message);
  return data;
};

export const ProductDelete = async (productId) => {
  const { data } = await axios.delete(`/products/${productId}`, headers);
  toast.error(data.message);
  return data;
};

export const AllOrdersData = async () => {
  const { data } = await axios.get("/orders", headers);
  return data;
};

export const updateOrderStatus = async (orderId, status) => {
  const { data } = await axios.patch(`/order/${orderId}`, status, headers);
  toast.success(data.message);
};

export const loadAllCoupon = async () => {
  const { data } = await axios.get("/coupons", headers);
  return data;
};

export const createCoupon = async (couponData) => {
  const { data } = await axios.post("/coupons", couponData, headers);
  toast.success(data.message);
  return data;
};

export const deleteCoupon = async (code) => {
  const { data } = await axios.delete(`/coupons/${code}`, headers);
  toast.error(data.message);
};

export const loadAllTransaction = async () => {
  const { data } = await axios.get("/transactions", headers);
  return data;
};
