import styled from "styled-components";

export const TopMenuContainer = styled.div`
     .desktop{
      display: block;
    }
    .mobile{
      display: none;
    }
  @media screen and (max-width: 1000px) {
    .desktop{
      display: none;
    }
    .mobile{
      display: block;
    }
  }
`;
