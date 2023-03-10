import P from 'prop-types';
import * as Styled from './styles';
export const Heading = ({ children, colorDark = true, as = 'h1', size = 'big', uppercase = true }) => {
  return (
    <Styled.Title colorDark={colorDark} as={as} size={size} uppercase={uppercase}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node,
  colorDark: P.bool,
  uppercase: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
};
