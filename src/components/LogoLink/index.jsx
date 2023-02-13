import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
export const LogoLink = ({ text, imgUrl = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>{imgUrl ? <img src={imgUrl} alt={text} /> : text}</Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  imgUrl: P.string,
  link: P.string.isRequired,
};
