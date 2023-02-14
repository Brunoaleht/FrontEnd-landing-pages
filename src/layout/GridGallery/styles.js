import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../../components/TextComponent/styles';

export const Container = styled.section`
  ${({ theme }) => css`
    > ${TextComponent} {
      margin-top: 0;
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;
export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;
export const GridElement = styled.div`
  ${() => css`
    overflow: hidden;
  `}
`;
export const Image = styled.img`
  ${() => css`
    width: 100%;
    transition: all 300ms ease-in-out;

    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
  `}
`;
