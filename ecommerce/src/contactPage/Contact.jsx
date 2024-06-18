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
    title: "Endereço do escritório",
    desc: "1201 park street, Fifth Avenue",
  },
  {
    imgUrl: "/src/assets/images/icon/02.png",
    imgAlt: "contact icon",
    title: "Número de telefone",
    desc: "+22698 745 632,02 982 745",
  },
  {
    imgUrl: "/src/assets/images/icon/03.png",
    imgAlt: "contact icon",
    title: "Enviar email",
    desc: "admin@shopcart.com",
  },
  {
    imgUrl: "/src/assets/images/icon/04.png",
    imgAlt: "contact icon",
    title: "Website",
    desc: "www.ecommerce.com",
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
            <h2 className="title">{title}</h2>
          </div>

          <div className="section-wrapper">
            <div className="row flex-row-reverse">
              <div className="col-xl-4 col-lg-5 col-12">
                <div className="contact-wrapper">
                  {contactList.map((val, i) => (
                    <div key={i} className="contact-item">
                      <div className="contact-thumb">
                        <img src={val.imgUrl} alt="" />
                      </div>
                      <div className="contact-content">
                        <h6 className="title">{val.title}</h6>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
