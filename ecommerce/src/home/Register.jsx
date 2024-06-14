import React from "react";

const subTitle = "Save the Day";
const title = (
  <h2 className="title">
    Participe do workshop gratuito de um dia inteiro
    <b> de vendas</b>
  </h2>
);

const desc = "Tempo limitado de oferta! se apresse";

const Register = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="register-section padding-tb pb-0">
      <div className="container">
        <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
          <div className="col">
            <div className="section-header">
              <span id="sub1" className="subtitle">
                {subTitle}
              </span>
              {title}
              <p>{desc}</p>
            </div>
          </div>
          <div className="col">
            <div className="section-wrapper">
              <h4>Registrar agora</h4>
              <form className="register-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  className="reg-input"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="reg-input"
                />

                <input
                  type="number"
                  name="number"
                  placeholder="Phone"
                  className="reg-input"
                />

                <button type="submit" className="lab-btn" onClick={handleClick}>
                  Registrar agora
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
