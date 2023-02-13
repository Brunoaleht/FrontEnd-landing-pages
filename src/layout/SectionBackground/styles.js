import styled, { css } from 'styled-components';

const activeBackground = (theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};

    ${background && activeBackground(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
