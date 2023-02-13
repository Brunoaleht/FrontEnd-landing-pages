import * as Styled from './styles';
import { KeyboardArrowUp as GoUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = () => {
  return (
    <Styled.Container href="#" aria-label="Go to top" title="Go to top">
      <GoUp />
    </Styled.Container>
  );
};
