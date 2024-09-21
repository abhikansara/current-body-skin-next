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
        <CustomButton>
          Buy on{" "}
          <Image src={AmazonIcon} alt="amazon" height={170} width={170} />
        </CustomButton>
        <CustomButton>Buy now (10% OFF)</CustomButton>
        <CustomButton>
          Buy on
          <Image src={FlipkartIcon} alt="amazon" height={170} width={170} />
        </CustomButton>
      </CustomModal>
    </div>
  );
};

export default OrderNowModal;
