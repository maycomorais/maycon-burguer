import styled, { css } from "styled-components";
import foodPorn from "../../assets/logo_paterns/login-food-porn.jpg";
import theme from "../../assets/styles/theme";

export const LoginContainer = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background-image: url(${foodPorn});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
  `}
`;
export const CardLogin = styled.div`
  ${({ theme }) => css`
    width: 300px;
    height: 100%;
    background-color: ${theme.colors.terciaryColor};
    padding: 10px;
    display: flex;
    border-radius: 0 16px 16px 0;
    flex-direction: column;
    align-items: center;
  `}

  a {
    text-decoration: none;
  }
`;

export const CardLoginHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 90px;
    align-items: center;
    margin-bottom: 50px;

    img {
      height: 100%;
      margin-left: 15px;
    }

    h1 {
      color: ${theme.colors.primaryColor};
      font-family: ${theme.constants.logoFontFamily};
      font-size: 40px;
      margin-left: 30px;
      line-height: 90%;
    }
  `}
`;

export const Paragraph = styled.p`
  margin: 15px;
  font-family: ${theme.constants.bodyFontFamily};
  color: ${theme.colors.primaryColor};
`;

export const ButtonGoogle = styled.div`
  ${({ theme }) => css`
    width: 210px;
    height: 40px;
    display: flex;
    background-color: #dbdbdb;
    border: none;
    border-radius: 16px;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease;
    margin-bottom: 20px;
    cursor: pointer;

    :hover {
      background-color: #afafaf;
    }

    img {
      height: 50%;
      margin-left: 10px;
    }

    p {
      width: auto;
      color: #262626;
      margin-right: 25px;
    }
  `}
`;

export const ButtonFacebook = styled.div`
  ${({ theme }) => css`
    width: 210px;
    height: 40px;
    display: flex;
    background-color: #dbdbdb;
    border: none;
    border-radius: 16px;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease;
    margin-bottom: 20px;
    cursor: pointer;

    :hover {
      background-color: #87abff;
    }

    img {
      height: 80%;
      margin-left: 10px;
    }

    p {
      width: auto;
      color: #262626;
      margin-right: 15px;
    }
  `}
`;
