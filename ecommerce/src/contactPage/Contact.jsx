import React from "react";
import PageHeader from "../components/PageHeader";

const Contact = () => {
  return (
    <div>
      <PageHeader title={"Entre em contato conosco"} curPage={"Contate-nos"} />
      <div className="map-adress-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
