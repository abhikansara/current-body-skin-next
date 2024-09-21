import React from "react";
import AmazonIcon from "@/assets/images/amazon.png";
import FlipkartIcon from "@/assets/images/flipkart.png";
import Image from "next/image";
import { CustomButton, CustomModal } from "./style";

const OrderNowModal = ({
  isModalVisible,
  hideModal,
}: {
  isModalVisible: boolean;
  hideModal: () => void;
}) => {
  return (
    <div>
      <CustomModal
        open={isModalVisible}
        footer={null}
        onClose={hideModal}
        onCancel={hideModal}
      >
        <CustomButton onClick={() => window.open("https://www.amazon.in")}>
          Buy on{" "}
          <Image src={AmazonIcon} alt="amazon" height={170} width={170} />
        </CustomButton>
        <CustomButton onClick={() => window.open("https://www.flipkart.com")}>
          Buy now (10% OFF)
        </CustomButton>
        <CustomButton onClick={() => window.open("https://www.flipkart.com")}>
          Buy on
          <Image src={FlipkartIcon} alt="amazon" height={170} width={170} />
        </CustomButton>
      </CustomModal>
    </div>
  );
};

export default OrderNowModal;
