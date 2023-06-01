import styled from "styled-components";

export const ButtonIconContainer = styled.div`
  display: flex;
  border: 1px solid #8807f7;
  border: ${({ borderColor }) =>
  borderColor ? `1px solid ${borderColor}` : "1px solid #8807f7"};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  padding: 14px 20px;
  gap: 16px;
  color: ${({ color }) => (color ? color : "#8807f7")};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;

  :hover {
    background-color: ${({ bgHoverColor }) =>
    bgHoverColor ? bgHoverColor : "rgba(136, 7, 247, 0.17)"};
    color: ${({ hoverColor }) => (hoverColor ? hoverColor : "#ffffff")};
  }

  @media screen and (max-width: 800px) {
  }
`;
