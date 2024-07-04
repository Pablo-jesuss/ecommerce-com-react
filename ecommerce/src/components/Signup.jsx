import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const title = "Cadastre-se";
const socialTitle = "Inscreva-se com mídia social";
const btnText = "Inscreva-se agora";

const Signup = () => {
  const [errorMessage, seterrorMessage] = useState("");
  const { signUpWithGmail, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

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
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      seterrorMessage(
        "A senha não corresponde! Por favor, forneça uma senha correta!"
      );
    } else {
      seterrorMessage("");
      createUser(password, email)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Conta criada concluída com sucesso!!!");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
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
                <button className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>

            {/* account bottom */}
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Tenho uma conta? <Link to="/login">Login</Link>
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
