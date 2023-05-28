import styled from "styled-components";

export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 18px 48px;
gap: 10px;
border-radius: 100px;
font-family: "Cabinet Grotesk", sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
cursor: pointer;
background-color: ${({ bgColor })=> bgColor ? bgColor : '#FFFFFF'};
color: ${({ color })=> color ? color : '#3D0072'};

:hover{
    background-color: ${({ bgHoverColor })=> bgHoverColor ? bgHoverColor : '#8807F7'};
    color: ${({ hoverColor })=> hoverColor ? hoverColor : '#ffffff'};
}



  @media screen and (max-width: 800px) {
  }
`;
