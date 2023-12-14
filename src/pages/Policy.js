import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus mt-5 ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>add privacy policy</p>
          <p style={{ color: "Green" }}>
            A Privacy Policy is a statement or a legal document that states how
            a company or website collects, handles and processes data of its
            customers ...
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
