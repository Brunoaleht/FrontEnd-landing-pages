import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.primaryColor};
    position: relative;

    &::after {
      content: '';
      background: ${theme.colors.secondaryColor};
      position: absolute;
      bottom: 0.77rem;
      left: 50%;
      height: 0.2rem;
      width: 0;
      transition: all 300ms ease-in-out;
    }
    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
