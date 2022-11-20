import React from "react";
import { Header } from "../Common/Header/Header";
import about from "../../Assets/Images/about.jpeg";

export const About = () => {
  return (
    <>
      <Header heading=" / About" />
      <section className="container">
        <div className="row py-5">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <img src={about} alt="about" width="100%" height="500px" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 my-3 d-flex align-items-center">
            <div>
              <h1>Our Story</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                accusantium sapiente tempora sed dolore esse deserunt eaque
                excepturi, delectus error accusamus vel eligendi, omnis beatae.
                Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
                dolore, obcaecati incidunt sequi blanditiis est exercitationem
                molestiae delectus saepe odio eligendi modi porro eaque in
                libero minus unde sapiente consectetur architecto. Ullam rerum,
                nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed
                quos similique amet. Ex, voluptate accusamus nesciunt totam
                vitae esse iste.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
