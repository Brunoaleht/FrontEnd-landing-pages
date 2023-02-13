import P from 'prop-types';
import { Heading } from '../../components/Heading';
import { TextComponent } from '../../components/TextComponent';
import { SectionBackground } from '../SectionBackground';
import * as Styled from './styles';

export const GridSection = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((i) => (
            <Styled.GridItem key={i.title}>
              <Heading size="medium" colorDark={!background} as="h3">
                {i.title}
              </Heading>
              <TextComponent>{i.description}</TextComponent>
            </Styled.GridItem>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridSection.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
  background: P.bool,
};
