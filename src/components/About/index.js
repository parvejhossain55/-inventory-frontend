import React from "react";
import about from "../../assets/images/about.jpg";
const About = () => {
  return (
    <>
      <section class="about-us">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="wc-box">
                <h4>
                  Welcome to <span>XeMart</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exercitationem quod facere praesentium odit. Repellat porro et
                  laudantium, atque similique distinctio.
                  <br /> Nemo quidem obcaecati aut possimus, voluptatibus
                  dignissimos facilis sit. Qui.Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Eos ipsum, ut! Numquam nesciunt,
                  ex obcaecati libero asperiores reprehenderit ratione minus
                  commodi magni fugit non nemo quas dolorum nisi ducimus
                  laboriosam!
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="wc-img">
                <img src={about} alt="" class="img-fluid" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="row his-mis">
                <div class="col-md-4">
                  <div class="about-bnr">
                    <a href="#">
                      <img src="images/banner-1.png" alt="" class="img-fluid" />
                    </a>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="about-bnr">
                    <a href="#">
                      <img src="images/banner-2.png" alt="" class="img-fluid" />
                    </a>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="about-bnr">
                    <a href="#">
                      <img
                        src="images/banner-3-1.png"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="history">
                    <h5>Our History</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa ut iure doloribus ratione quia nam ducimus nemo,
                      culpa vero eveniet magni fugit non nemo quas dolorum nisi
                      ducimus laboriosam.
                    </p>
                    <ul class="list-unstyled">
                      <li>
                        <i class="fa fa-check"></i>Numquam nesciunt, ex
                        obcaecati libero asperiores
                      </li>
                      <li>
                        <i class="fa fa-check"></i>Ipsa ut iure doloribus
                        ratione quia nam ducimus
                      </li>
                      <li>
                        <i class="fa fa-check"></i>Reprehenderit ratione minus
                        commodi magni
                      </li>
                      <li>
                        <i class="fa fa-check"></i>Porro et laudantium, atque
                        similique
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="history">
                    <h5>Our Mission</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quam veniam doloribus officiis fuga! Laboriosam ea, earum!
                      Molestias unde alias, soluta cupiditate possimus, vel,
                      iste impedit provident numquam voluptatum enim? Tempora
                      ratione minus commodi magni fugit non nemo quas dolorum
                      nisi ducimus. Qui Lorem ipsum dolor sit amet.
                      <br /> Eos ipsum, ut! Numquam nesciunt, ex obcaecati
                      libero asperiores reprehende ratione minus commodi magni
                      fugit non nemo quas asperiores reprehende ratione minus
                      commodi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
