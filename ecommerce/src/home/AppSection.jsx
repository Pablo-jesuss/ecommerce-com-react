import React from "react";
import { Link } from "react-router-dom";

const btnText = "Inscreva-se gratuitamente";
const title = "Compre a qualquer hora, em qualquer lugar";
const desc =
  "Faça compras em qualquer dispositivo com nosso aplicativo e saiba o que quiser o tempo todo. Basta baixar e instalar e começar a aprender.";

const AppSection = () => {
  return (
    <div className="app-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <Link to="/sign-up" className="lab-btn mb-4">
            {btnText}
          </Link>
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="section-wrapper">
          <ul className="lab-ul">
            <li>
              <a href="#">
                <img src="/src/assets/images/app/01.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/src/assets/images/app/02.jpg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
