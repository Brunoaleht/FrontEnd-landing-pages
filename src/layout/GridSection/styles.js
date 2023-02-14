import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../../components/Heading/styles';
import { Container as TextComponent } from '../../components/TextComponent/styles';

export const Container = styled.section`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;
export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
    overflow: hidden;
    width: 100%;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;
export const GridItem = styled.div`
  ${() => css`
    ${HeadingContainer} {
      position: relative;
      left: 1rem;
    }
  `}
`;
