import styled, { css } from 'styled-components';
import { Title } from '../../components/Heading/styles';

export const Container = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`;
export const TextContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;
export const ImgContainer = styled.div`
  ${() => css``}
`;
export const Img = styled.img`
  ${({ theme }) => css`
    position: relative;
    left: 15rem;
    width: 75%;
    @media ${theme.media.lteMedium} {
      left: 0;
    }
  `}
`;
