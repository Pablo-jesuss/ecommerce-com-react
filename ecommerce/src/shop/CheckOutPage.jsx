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
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
