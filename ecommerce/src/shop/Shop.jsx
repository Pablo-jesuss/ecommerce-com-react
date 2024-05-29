import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Data from "../products.json";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";

const ShowResults = "Showing 01 - 12 of 139 Results";

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setproducts] = useState(Data);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // function
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />

      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title here */}
                <div className="shop-title d-flex flex-warp justify-content-between">
                  <p>{ShowResults}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                {/* products cards */}
                <div>
                  <ProductCards GridList={GridList} products={products} />
                </div>

                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">right side</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
