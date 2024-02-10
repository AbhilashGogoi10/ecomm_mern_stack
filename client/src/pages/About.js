import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - E-Shoppe"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
            It all began in 2021 with a vision to offer ecommerce services worldwide. We believe in delivering the best products backed with discounts and
            engaging work environment is the key to attain such objectives.
            Over the years, we have grown and evolved, but our zeal for
            improving the customer experience has remained constant.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
