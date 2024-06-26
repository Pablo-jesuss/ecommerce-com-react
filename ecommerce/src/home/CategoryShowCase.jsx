import React, { useState } from "react";
import Ratting from "../components/Ratting";
import { Link } from "react-router-dom";

const title = "Pesquise seu produto";

const ProductData = [
  {
    imgUrl: "src/assets/images/categoryTab/01.jpg",
    cate: "Tênis",
    title: "Nike ",
    author: "assets/images/course/author/01.jpg",
    brand: "Nike",
    price: "R$ 1.000",
    id: 1,
  },
  {
    imgUrl: "src/assets/images/categoryTab/02.jpg",
    cate: "Bolsa",
    title: "Bags",
    author: "assets/images/course/author/02.jpg",
    brand: "Bags",
    price: "R$ 199.00",
    id: 2,
  },
  {
    imgUrl: "src/assets/images/categoryTab/03.jpg",
    cate: "Phones",
    title: "iPhone 13",
    author: "src/assets/images/categoryTab/brand/apple.png",
    brand: "Apple",
    price: "R$ 4.000",
    id: 3,
  },
  {
    imgUrl: "src/assets/images/categoryTab/04.jpg",
    cate: "Mochila",
    title: "Bag 15",
    author: "assets/images/course/author/04.jpg",
    brand: "Exe",
    price: "R$ 199.00",
    id: 4,
  },
  {
    imgUrl: "src/assets/images/categoryTab/05.jpg",
    cate: "Tênis",
    title: "Sports Shoes",
    author: "assets/images/course/author/05.jpg",
    brand: "Nike",
    price: "R$ 199.00",
    id: 5,
  },
  {
    imgUrl: "src/assets/images/categoryTab/06.jpg",
    cate: "Beleza",
    title: "Perfume",
    author: "assets/images/course/author/06.jpg",
    brand: "Zaara",
    price: "R$ 199.00",
    id: 6,
  },
  {
    imgUrl: "src/assets/images/categoryTab/07.jpg",
    cate: "Bolsa",
    title: "Look Less Chanel Bag ",
    author: "assets/images/course/author/01.jpg",
    brand: "Gucci",
    price: "R$ 199.00",
    id: 7,
  },
  {
    imgUrl: "src/assets/images/categoryTab/08.jpg",
    cate: "Tênis",
    title: "Casual Sneakers",
    author: "assets/images/course/author/02.jpg",
    brand: "Adidas",
    price: "R$ 199.00",
    id: 8,
  },
];

const CategoryShowCase = () => {
  const [item, setItems] = useState(ProductData);

  // category baded filtering
  const filterItem = (categItem) => {
    const updateItems = ProductData.filter((curElem) => {
      return curElem.cate === categItem;
    });
    setItems(updateItems);
  };
  return (
    <div className="course-section style-3 padding-tb">
      {/* shapes */}
      <div className="course-shape one">
        <img src="/src/assets/images/shape-img/icon/01.png" alt="" />
      </div>
      <div className="course-shape two">
        <img src="/src/assets/images/shape-img/icon/02.png" alt="" />
      </div>

      {/* main section  */}
      <div className="container">
        {/* section header */}
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul id="lab-oll" className="lab-ul">
              <li onClick={() => setItems(ProductData)}>All</li>
              <li onClick={() => filterItem("Tênis")}>Tênis</li>
              <li onClick={() => filterItem("Bolsa")}>Bolsa</li>
              <li onClick={() => filterItem("Phones")}>Phones</li>
              <li onClick={() => filterItem("Beleza")}>Beleza</li>
            </ul>
          </div>
        </div>

        {/* section body */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
            {item.map((product) => (
              <div key={product.id} className="col">
                <div className="course-item style-4">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={product.imgUrl} alt="" />
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">{product.cate}</a>
                        </div>
                        <div className="course-reiew">
                          <Ratting />
                        </div>
                      </div>
                    </div>

                    {/* content */}
                    <div className="course-content">
                      <Link to={`/shop/${product.id}`}>
                        <h6>{product.title}</h6>
                      </Link>
                      <div className="course-footer">
                        <div className="course-author">
                          <Link to="/" className="ca-name">
                            {product.brand}
                          </Link>
                        </div>
                        <div className="course-price">{product.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;
