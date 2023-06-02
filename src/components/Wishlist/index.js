import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addToCart,
  loadWishlistData,
  removeWishlistData,
} from "../../apiRequest";
import { useGlobalContext } from "../../context/gobalContext";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const { checkCountCart } = useGlobalContext();

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = async () => {
    const data = await loadWishlistData();
    setWishlist(data);
  };

  const removeWishlist = async (productId) => {
    await removeWishlistData(productId);
    await loadWishlist();
  };

  const addToCartItem = async (productId) => {
    await addToCart(productId);
    checkCountCart();
  };

  return (
    <>
      <section className="shopping-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cart-table wsh-list table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="t-pro">Product</th>
                      <th className="t-price">Price</th>
                      <th className="t-qty">Stock</th>
                      <th className="t-total">Add To Cart</th>
                      <th className="t-rem">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlist?.length > 0 ? (
                      wishlist.map((item) => (
                        <tr>
                          <td className="t-pro d-flex">
                            <div className="t-img">
                              <Link to={`/product/${item.product.slug}`}>
                                <img
                                  src={item.product?.image?.secure_url}
                                  width={100}
                                  height={100}
                                  alt={item.product.title}
                                />
                              </Link>
                            </div>
                            <div className="t-content">
                              <p className="t-heading py-5">
                                <Link to={`/product/${item.product.slug}`}>
                                  {item.product.title}
                                </Link>
                              </p>
                            </div>
                          </td>
                          <td className="t-price">
                            {
                              <span
                                style={{ fontSize: "16px", marginRight: "2px" }}
                              >
                                ৳
                              </span>
                            }
                            {item.product.price}
                          </td>
                          <td className="t-stk">
                            {item.product.quantity > 0
                              ? "In Stock"
                              : "Out of Stock"}
                          </td>
                          <td className="t-add">
                            <button
                              type="button"
                              onClick={() => addToCartItem(item.product._id)}
                            >
                              Add to Cart
                            </button>
                          </td>
                          <td className="t-rem">
                            <Link
                              onClick={() => removeWishlist(item.product._id)}
                            >
                              <i className="fa fa-trash-o"></i>
                            </Link>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <>
                        <h6 className="text-center mt-3 notfoundtext">
                          No Item Found in Your Wishlist
                        </h6>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
