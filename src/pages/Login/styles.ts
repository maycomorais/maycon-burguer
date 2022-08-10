import styled, { css } from "styled-components";
import foodPorn from "../../assets/logo_paterns/login-food-porn.jpg";

export const LoginContainer = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background-image: url(${foodPorn});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: st;
    align-items: flex-start;
  `}
`;
export const CardLogin = styled.div`
  ${({ theme }) => css`
    width: 300px;
    height: 100%;
    background-color: ${theme.colors.terciaryColor};
    padding: 10px;
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      width: 100%;
      justify-content: space-around;
      align-items: center;
    }

    img {
      width: 30%;
    }

    h1 {
      color: ${theme.colors.primaryColor};
      font-family: ${theme.constants.logoFontFamily};
      width: 70%;
    }
  `}
`;
