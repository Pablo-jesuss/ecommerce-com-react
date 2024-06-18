import React from "react";
import PageHeader from "../components/PageHeader";

const subTitle = "Entre em contato conosco";
const title = "Estamos sempre ansiosos para ouvir de você!";
const conSubTitle = "Entre em contato com Fale conosco";
const conTitle =
  "Preencha o formulário abaixo para que possamos conhecer melhor você e suas necessidades.";
const btnText = "Envie nossa mensagem";

const contactList = [
  {
    imgUrl: "/src/assets/images/icon/01.png",
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "1201 park street, Fifth Avenue",
  },
  {
    imgUrl: "/src/assets/images/icon/02.png",
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+22698 745 632,02 982 745",
  },
  {
    imgUrl: "/src/assets/images/icon/03.png",
    imgAlt: "contact icon",
    title: "Send email",
    desc: "admin@shopcart.com",
  },
  {
    imgUrl: "/src/assets/images/icon/04.png",
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.shopcart.com",
  },
];

const Contact = () => {
  return (
    <div>
      <PageHeader title={"Entre em contato conosco"} curPage={"Contate-nos"} />
      <div className="map-adress-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{subTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
