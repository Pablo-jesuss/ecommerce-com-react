import React, { useState } from "react";
import { Link } from "react-router-dom";

const title = "Cadastre-se";
const socialTitle = "Inscreva-se com mídia social";
const btnText = "Inscreva-se agora";

const Signup = () => {
  const [errorMessage, seterrorMessage] = useState("");

  const handleRegister = () => {};
  const handleSignup = (event) => {};
  return (
    <div className="login-section padding-tb section-bg">
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleSignup}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome completo *"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Endereço de email *"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Senha *"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirme sua senha *"
                  required
                />
              </div>

              {/* showing message */}

              <div>
                {errorMessage && (
                  <div className="error-message text-danger">
                    {errorMessage}
                  </div>
                )}
              </div>

              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Lembre de mim</label>
                  </div>
                  <Link to="/forgetpass">Esqueceu a senha?</Link>
                </div>
              </div>
              <div className="form-group">
                <button className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>

            {/* account bottom */}
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Não tenho uma conta? <Link to="/sing-up">Assine você</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>

              {/* social login */}
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <button className="github" onClick={handleRegister}>
                    <i className="icofont-github"></i>
                  </button>
                </li>

                <li>
                  <a href="/" className="linkedin">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>

                <li>
                  <a href="/" className="pinterest">
                    <i className="icofont-pinterest"></i>
                  </a>
                </li>

                <li>
                  <a href="/" className="twitter">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="/" className="instagram">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="/" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
