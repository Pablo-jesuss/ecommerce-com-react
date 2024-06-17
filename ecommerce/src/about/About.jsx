import React from "react";
import PageHeader from "../components/PageHeader";

const subTitle = "Sobre nossa marca";
const title = "Serviços de boa qualificação e melhores experiências";
const desc =
  "Fornece acesso distinto aos usuários, enquanto processos transparentes, alguns incentivam funcionalidades eficientes, em vez de arquitetura extensível, comunicam serviços alavancados e multiplataforma.";

const year = "30+";
const expareance = "Anos de experiências";

const aboutList = [
  {
    imgUrl: "/src/assets/images/about/icon/01.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Skilled Instructors",
    desc: "Fornecer acesso diferenciado aos usuários enquanto comunica serviços alavancados",
  },
  {
    imgUrl: "/src/assets/images/about/icon/02.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Get Certificate",
    desc: "Fornecer acesso diferenciado aos usuários enquanto comunica serviços alavancados",
  },
  {
    imgUrl: "/src/assets/images/about/icon/03.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Online Classes",
    desc: "Fornecer acesso diferenciado aos usuários enquanto comunica serviços alavancados",
  },
];

const About = () => {
  return (
    <div>
      <PageHeader title={"Sobre nossa marca"} curPage={"About"} />
      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-1 align-items-center">
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  <img src="src/assets/images/about/01.png" alt="" />
                </div>
                <div className="abs-thumb">
                  <img src="src/assets/images/about/02.jpg" alt="" />
                </div>
                <div className="about-left-content">
                  <h3>{year}</h3>
                  <p>{expareance}</p>
                </div>
              </div>
            </div>

            {/* 2nd col */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
