import React, { useState } from "react";
import Ratting from "../components/Ratting";

const reviewtitle = "Add a Review";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);

  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(false)}>
          {" "}
          Descrição
        </li>
        <li className="rev" onClick={() => setReviewShow(true)}>
          {" "}
          Reviews 4
        </li>
      </ul>

      {/* desc & review content */}
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        {reviewShow ? (
          <div className="review-showing">
            <ul className="content lab-ul">
              {ReviewList.map((review, i) => (
                <li key={i}>
                  <div className="post-thumb">
                    <img src={review.imgUrl} alt={review.imgAlt} />
                  </div>
                  <div className="post-content">
                    <div className="entry-meta ratting">
                      <div className="posted-on ">
                        <a href="#">{review.name}</a>
                        <p>{review.date}</p>
                      </div>
                      <Ratting />
                    </div>
                    <div className="entry-content">
                      <p>{review.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* add review field */}
            <div className="client-review">
              <div className="review-form">
                <div className="review-title">
                  <h5>{reviewtitle}</h5>
                </div>

                <form action="action" className="row">
                  <div className="col-md-4 col-12">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nome Completo *"
                    />
                  </div>
                  <div className="col-md-4 col-12">
                    <input
                      type="email"
                      name="email"
                      id="name"
                      placeholder="Seu email *"
                    />
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="ratting">
                      <span className="me-2">Sua Avaliação </span>
                      <Ratting />
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <textarea
                      name="message"
                      id="message"
                      rows="8"
                      placeholder="Digite aqui a mensagem"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="default-button">
                      <span>Enviar revisão</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              laudantium ratione error reprehenderit deserunt sed exercitationem
              laborum facere. Recusandae non nostrum magni veritatis soluta id
              harum vel adipisci ratione. Officia! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Autem in doloribus vitae iste
              consequatur iusto, sunt laborum enim, exercitationem tenetur
              voluptatibus quam reiciendis tempore. Id consectetur adipisci
              cumque dolor. Mollitia! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Porro rem doloribus iure sed excepturi! Aperiam
              necessitatibus pariatur, accusamus illum velit debitis error. Quam
              praesentium ad molestias architecto error odit at.
            </p>

            <div className="post-item">
              <div className="post-thumb">
                <img src="/src/assets/images/shop/03.jpg" alt="" />
              </div>
              <div className="post-content">
                <ul className="lab-ul">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    veniam accusantium vitae amet.
                  </li>
                  <li>
                    sit amet consectetur adipisicing elit. Ut veniam accusantium
                    vitae amet.
                  </li>
                  <li>
                    ipsum dolor consectetur adipisicing elit. Ut veniam
                    accusantium vitae amet.
                  </li>
                  <li>
                    Amet consectetur adipisicing elit. Ut veniam accusantium
                    vitae amet.
                  </li>
                  <li>
                    Consectetur adipisicing elit. Ut veniam accusantium vitae
                    amet.
                  </li>
                </ul>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                laudantium ratione error reprehenderit deserunt sed
                exercitationem laborum facere. Recusandae non nostrum magni
                veritatis soluta id harum vel adipisci ratione. Officia! Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Autem in
                doloribus vitae iste consequatur iusto, sunt laborum enim,
                exercitationem tenetur voluptatibus quam reiciendis tempore. Id
                consectetur adipisci cumque dolor. Mollitia! Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Porro rem doloribus iure
                sed excepturi! Aperiam necessitatibus pariatur, accusamus illum
                velit debitis error. Quam praesentium ad molestias architecto
                error odit at.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Review;
