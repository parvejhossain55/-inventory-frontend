import axios from "axios";
import { toast } from "react-toastify";

export const addToCart = async (productId, quantity = 1) => {
  try {
    const { data } = await axios.post("/cart", { productId, quantity });
    const cart = JSON.stringify(data);
    localStorage.setItem("cart", cart);
    toast.success("Product added to cart.");
  } catch (error) {
    console.log(error);
    toast.error("Product add to cart failed.");
  }
};

export const addToWishlist = async (productId) => {
  const { data } = await axios.post("/wishlist", { productId });
  const wishlist = JSON.stringify(data.wishlist);
  localStorage.setItem("wishlist", wishlist);
  toast.success(data.message);
};


export const cartCount = async () => {
  let getCart = localStorage.getItem("cart");
  let cart = JSON.parse(getCart);
  const totalCart = cart.products.reduce((acc, item) => acc + item.quantity, 0);
  return totalCart
}