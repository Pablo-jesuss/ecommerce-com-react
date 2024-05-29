import React, { useState } from "react";
import PageHeader from "../components/PageHeader";

const ShowResults = "Showing 01 - 12 of 139 Results";

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />

      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
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
                  </div>
                </div>
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
