import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../../components/TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: solid 0.1rem ${theme.colors.mediumGray};
    display: flex;
    justify-content: center;
    align-items: center;
    ${TextComponent} {
      font-size: ${theme.fonts.sizes.small};
    }
    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.fonts.sizes.small};
    }
    & ${SectionContainer} {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  `}
`;
