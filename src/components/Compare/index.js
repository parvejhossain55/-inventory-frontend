import React from 'react'
import mega from '../../assets/images/mega-1.jpg'

const Compare = () => {
  return (
    <>
      <section class="compare-box">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="comp-table table-responsive">
                <table class="table">
                  <tbody>
                    <tr class="heading">
                      <td class="col-name text-center">Product</td>
                      <td class="text-center">
                        <i class="fa fa-trash-o"></i>
                        <a href="#">
                          <img src={mega} alt="" />
                          <div class="tag-title text-left">
                            <span>Camera</span>
                            <h6>Samsung Smart Led Tv</h6>
                          </div>
                        </a>
                      </td>
                      <td class="text-center">
                        <i class="fa fa-trash-o"></i>
                        <a href="#">
                          <img src={mega} alt="" />
                          <div class="tag-title text-left">
                            <span>Mouse</span>
                            <h6>Samsung Smart Led Tv</h6>
                          </div>
                        </a>
                      </td>
                      <td class="text-center">
                        <i class="fa fa-trash-o"></i>
                        <a href="#">
                          <img src={mega} alt="" />
                          <div class="tag-title text-left">
                            <span>Speaker</span>
                            <h6>Samsung Smart Led Tv</h6>
                          </div>
                        </a>
                      </td>
                    </tr>
                    <tr class="desc">
                      <td class="col-name text-center">Description</td>
                      <td>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Neque suscipit harum praesentium est? Quae et
                          quam saepe, ab libero similique cum magnam.
                        </p>
                      </td>
                      <td>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Neque suscipit harum praesentium est? Quae et
                          quam saepe, ab libero similique cum magnam.
                        </p>
                      </td>
                      <td>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Neque suscipit harum praesentium est? Quae et
                          quam saepe, ab libero similique cum magnam.
                        </p>
                      </td>
                    </tr>
                    <tr class="rating text-center">
                      <td class="col-name">Rating</td>
                      <td class="text-center">
                        <ul class="list-unstyled list-inline rate">
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
                      </td>
                      <td>
                        <ul class="list-unstyled list-inline rate">
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
                            <i class="fa fa-star"></i>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul class="list-unstyled list-inline rate">
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
                          <li class="list-inline-item">
                            <i class="fa fa-star-o"></i>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr class="price text-center">
                      <td class="col-name">Price</td>
                      <td>
                        <p>$399.00</p>
                      </td>
                      <td>
                        <p>$399.00</p>
                      </td>
                      <td>
                        <p>$399.00</p>
                      </td>
                    </tr>
                    <tr class="stock text-center">
                      <td class="col-name">Price</td>
                      <td>
                        <p>In Stock</p>
                      </td>
                      <td>
                        <p>In Stock</p>
                      </td>
                      <td>
                        <p>In Stock</p>
                      </td>
                    </tr>
                    <tr class="color text-center">
                      <td class="col-name">Color</td>
                      <td>
                        <ul class="list-unstyled list-inline clr">
                          <li class="list-inline-item">
                            <span></span>
                          </li>
                          <li class="list-inline-item">
                            <span></span>
                          </li>
                          <li class="list-inline-item">
                            <span></span>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul class="list-unstyled list-inline clr">
                          <li class="list-inline-item">
                            <span></span>
                          </li>
                          <li class="list-inline-item">
                            <span></span>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul class="list-unstyled list-inline clr">
                          <li class="list-inline-item">
                            <span></span>
                          </li>
                          <li class="list-inline-item">
                            <span></span>
                          </li>
                          <li class="list-inline-item">
                            <span></span>
                          </li>
                          <li class="list-inline-item">
                            <span></span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr class="add-cart text-center">
                      <td></td>
                      <td>
                        <button type="button">Add To Cart</button>
                      </td>
                      <td>
                        <button type="button">Add To Cart</button>
                      </td>
                      <td>
                        <button type="button">Add To Cart</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Compare