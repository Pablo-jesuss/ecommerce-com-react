import React from "react";

const subTitle = "Save the Day";
const title = (
  <h2>
    Join on Day Long Free Workshop for
    <b>
      Advance <span>Mastering</span>
    </b>
    on Sales
  </h2>
);

const desc = "Limited Time Offer! hurry Up";

const Register = () => {
  return (
    <section className="register-section padding-tb pb-0">
      <div className="container">
        <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
          <div className="col">
            <div className="section-header">
              <span>{subTitle}</span>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </section>
  );
};

export default Register;
