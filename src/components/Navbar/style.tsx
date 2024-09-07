import styled from "styled-components";

export const Container = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 16px;
  @media screen and (max-width: 992px) {
    justify-content: space-between;
    padding: 16px 28px;
    img {
      height: 24px;
    }
    height: ${({ isMenuOpen }) => (isMenuOpen ? "320px" : "auto")};
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  @media screen and (max-width: 992px) {
    position: absolute;
    flex-direction: column;
    gap: 16px;
    top: 64px;
    left: 0;
    right: 28px;
    border-radius: 8px;
    align-items: flex-end;
  }
`;

export const Link = styled.a`
  color: #282828;
  cursor: pointer;
  text-transform: uppercase;
`;

export const Button = styled(Link)`
  padding: 8px 20px;
  border: 1px solid #b6b6b6;
  border-radius: 45px;
`;
