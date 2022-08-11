import styled, { css } from "styled-components";

export const SettingsProductCardContainer = styled.div`
  ${({ theme }) => css`
    width: 220px;
    height: 250px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.secondaryColor};
    text-align: center;
    
    img {
      max-width: 100%;
      object-fit: cover;
    }
    h3 {
      font-family: ${theme.constants.bodyFontFamily};
      color: ${theme.colors.primaryColor};
    }
    p {
      font-family: ${theme.constants.bodyFontFamily};
      color: ${theme.colors.primaryColor};
      font-size: 17px;
    }
  `}
`;

export const SettingsProductCardButton = styled.button`
  ${({ theme }) => css`
    height: 52px;
    width: 100%;
    border-radius: 0px 0px 8px 8px;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.terciaryColor};
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  `}
`;
