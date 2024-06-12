import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="modalCart">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Fazer o check-out
      </Button>

      <Modal
        className="modal fade"
        show={show}
        onHide={handleClose}
        animation={false}
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Selecione seu metodo de pagamento</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "visa" ? "active" : ""
                      }`}
                      id="visa-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handleTabChange("visa")}
                      href="#visa"
                    >
                      <img
                        src="https://i.imgur.com/sB4jftM.png"
                        width="80"
                        alt=""
                      />
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "paypal" ? "active" : ""
                      }`}
                      id="paypal-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="paypal"
                      aria-selected={activeTab === "paypal"}
                      onClick={() => handleTabChange("paypal")}
                      href="#paypal"
                    >
                      <img
                        src="https://i.imgur.com/yK7EDD1.png"
                        width="80"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>

                {/* contents */}

                <div className="tab-content" id="myTabContent">
                  {/* visa content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "visa" ? "show active" : ""
                    }`}
                  ></div>
                  {/* paypal content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
