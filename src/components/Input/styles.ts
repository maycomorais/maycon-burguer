import styled, { css } from "styled-components";

interface StyledInputProps {
  inputSize?: "small" | "large";
}

export const StyledInput = styled.input<StyledInputProps>`
  ${({ theme, inputSize }) => css`
    all: unset;
    padding: 0 16px;
    box-sizing: border-box;
    width: 144px;
    height: 48px;
    background-color: ${theme.colors.primaryColor};
    border: 1px solid ${theme.colors.secondaryColor};
    border-radius: 8px;
    color: ${theme.colors.secondaryColor};
    font-family: ${theme.constants.bodyFontFamily};
    text-align: center;
    ${inputSize === "small" &&
    css`
      width: 80px;
    `}
    ${inputSize === "large" &&
    css`
      width: 200px;
    `}
  `}
`;
