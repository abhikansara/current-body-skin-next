"use client";

import React from "react";
import { Footer } from "./style";
import { Button } from "antd";
import OrderNowModal from "../OrderNowModal";

const OrderNow = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const hideModal = () => setIsModalVisible(false);
  const showModal = () => setIsModalVisible(true);

  return (
    <>
      <Footer className="footer">
        <Button type="primary" size="large" onClick={showModal}>
          Order Now !!
        </Button>
      </Footer>
      <OrderNowModal isModalVisible={isModalVisible} hideModal={hideModal} />
    </>
  );
};

export default OrderNow;
