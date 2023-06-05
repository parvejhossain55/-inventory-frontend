import { Link, useNavigate } from "react-router-dom";
import { addToCart, addToWishlist } from "../../apiRequest";
import { useGlobalContext } from "../../context/gobalContext";
import { toast } from "react-toastify";
import { getToken } from "../../helper/helper";

const ProductCard = ({ product, col = 3 }) => {
  const { checkCountCart } = useGlobalContext();

  const addWishlist = async (productId) => {
    const token = getToken()
    if (!token) {
      toast.error("Can't add wishlist without login");
      return;
    }
    await addToWishlist(productId);
  };

  const addCartItem = async (productId) => {
    const token = getToken()
    if (!token) {
      toast.error("Can't add cart without login");
      return;
    }
    await addToCart(productId);
    checkCountCart();
  };

  return (
    <>
      <div class={`col-md-${col} col-sm-6`}>
        <div class="product-grid">
          <div class="product-image">
            <Link to={`/product/${product.slug}`} class="image">
              {product?.image && (
                <img class="pic-1" src={product?.image.secure_url} />
              )}
            </Link>

            {product.type === "new" ||
              (product.type === "sale" && (
                <span class="product-new-label">{product.type}</span>
              ))}
            <ul class="product-links">
              <li>
                <Link onClick={() => addWishlist(product._id)}>
                  <i class="fa fa-heart"></i>
                </Link>
              </li>
              <li onClick={() => addCartItem(product._id)}>
                <Link>
                  <i class="fa fa-shopping-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div class="product-content">
            <div>
              <ul class="list-unstyled list-inline rating">
                <li class="list-inline-item">
                  <i class="fa fa-star"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-star"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-star"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-star"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-star-o"></i>
                </li>
              </ul>
            </div>
            <h3 class="title">
              <Link to={`/product/${product.slug}`}>{product.title}</Link>
            </h3>
            <ul class="list-unstyled list-inline ">
              <li class="list-inline-item price">
                {
                  <span style={{ fontSize: "16px", marginRight: "2px" }}>
                    ৳
                  </span>
                }
                {product.price}
              </li>
              {/* <li class="list-inline-item price2">$150.00</li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
