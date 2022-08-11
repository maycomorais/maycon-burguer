import styled, { css } from "styled-components";

interface ActiveButtonProps {
  active?: boolean;
}

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: ${theme.colors.terciaryColor};
  `}
`;

export const SettingsNavigationContainer = styled.div`
  ${({ theme }) => css`
    width: 40vw;
    margin-left: 8vw;
    height: 100vh;
    padding: 1.5rem;
    box-sizing: border-box;
    color: ${theme.colors.secondaryColor};

    h2 {
      font-family: ${theme.constants.bodyFontFamily};
    }
  `}
`;

export const SettingsNavigationButtonsList = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100% - 3rem);
    background-color: ${theme.colors.primaryColor};
    margin: 1.5rem 0;
    border-radius: 8px;
    overflow: hidden;
  `}
`;

export const SettingsNavigationButtonContainer = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    width: 100%;
    height: 5.5rem;
    padding: 1.5rem 0;
    padding-left: 3rem;
    border-bottom: 1px solid ${theme.colors.secondaryColor};
    box-sizing: border-box;
    h2 {
      font-size: 25px;
    }
    p {
      font-family: ${theme.constants.bodyFontFamily};
      font-size: 17px;
      color: ${theme.colors.secondaryColor};
    }
    ${active &&
    css`
      background-color: ${theme.colors.secondaryColor};
    `}
  `}
`;

export const SettingsNavigationButtonSelected = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    width: 100%;
    height: 100%;
    position: relative;
    svg {
      position: absolute;
      left: -1.4rem;
    }
    ${active &&
    css`
      border-right: 5px solid ${theme.colors.primaryColor};
      box-sizing: border-box;
      color: ${theme.colors.primaryColor};
      svg {
        color: ${theme.colors.primaryColor};
      }
      p {
        color: ${theme.colors.primaryColor};
      }
    `}
  `}
`;

export const EntitiesEditContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100% - 5.8rem);
    margin-top: 4.75rem;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
    box-sizing: border-box;
    background-color: ${theme.colors.terciaryColor};
    border: 2px groove;
    border-radius: 8px;
    color: ${theme.colors.primaryColor};
    h2 {
      font-family: ${theme.constants.bodyFontFamily};
      font-size: 25px;
      margin: 1.8rem 0;
      margin-left: 1.5rem;
    }
  `}
`;

export const EntitiesEditCategoriesSelector = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 2.5rem;
    border-bottom: 3px solid ${theme.colors.primaryColor};
    padding: 0 1.5rem;
    box-sizing: border-box;
  `}
`;

export const EntitiesEditCategoriesButton = styled.button<ActiveButtonProps>`
  ${({ theme, active }) => css`
    height: 100%;
    width: 80px;
    padding: 0 0.2rem;
    box-sizing: border-box;
    border-radius: 8px 8px 0 0;
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.primaryColor};
    font-family: ${theme.constants.bodyFontFamily};
    font-size: 18px;
    margin-right: 1.5rem;
    border: none;
    cursor: pointer;
    :hover {
      color: ${theme.colors.terciaryColor};
    }
    ${active &&
    css`
      color: ${theme.colors.secondaryColor};
      background-color: ${theme.colors.primaryColor};
      border-bottom: 1px solid ${theme.colors.primaryColor};
    `}
  `}
`;

export const EntitiesEditList = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100% - 16.25rem);
    display: flex;
    flex-wrap: wrap;
    padding: 1.5rem;
    box-sizing: border-box;
    gap: 1.5rem;
    overflow-y: scroll;
  `}
`;

export const AddEntityCard = styled.div`
  ${({ theme }) => css`
    width: 220px;
    height: 250px;
    border-radius: 8px;
    border: 1px dashed ${theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primaryColor};
    cursor: pointer;

    p {
      font-family: ${theme.constants.bodyFontFamily};
      font-size: 20px;
    }
  `}
`;

export const ConfirmationContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100px;
    padding-left: 1.5rem;
    padding-top: 30px;
    box-sizing: border-box;
    display: flex;
    gap: 1rem;
  `}
`;
