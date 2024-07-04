import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const title = "Login";
const socialTitle = "Faça login com mídia social";
const btnText = "Conecte-se agora";

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];

const Login = () => {
  const [errorMessage, seterrorMessage] = useState("");
  const { signUpWithGmail, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        alert("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.errorMessage;
        seterrorMessage("Forneça e-mail e senha válidos!");
      });
  };

  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.errorMessage;
        seterrorMessage("Forneça e-mail e senha válidos!");
      });
  };

  return (
    <div className="login-section padding-tb section-bg">
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleLogin}>
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

export default Login;
