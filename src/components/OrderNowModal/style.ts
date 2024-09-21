import { Button, Modal } from "antd";
import styled from "styled-components";

export const CustomModal = styled(Modal)`
  .ant-modal-body {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const CustomButton = styled(Button)`
  display: flex;
  padding: 40px;
  align-items: center;
  width: 95%;
  font-size: 28px;
  font-weight: 800;
  color: #ffffff;
  gap: 24px;
  background-color: #b34bc5;
  border-radius: 18px;
`;
