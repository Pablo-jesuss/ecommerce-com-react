import React from "react";

const ProductCards = ({ GridList, products }) => {
  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        GridList ? "grid" : "list"
      }`}
    >
      {products.map((product, i) => (
        <div key={i} className="col-lg-4 col-md-6 col-12">
          <div className="product-item">
            {/* product images */}
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={product.img} alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
