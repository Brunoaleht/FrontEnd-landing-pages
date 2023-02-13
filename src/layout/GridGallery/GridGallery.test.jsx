import { renderTheme } from '../../styles/render-theme';
import { GridGallery } from '.';

import mock from './mock';

describe('<GridGallery />', () => {
  it('should render with background', () => {
    const { container } = renderTheme(<GridGallery {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background', () => {
    const { container } = renderTheme(<GridGallery {...mock} background={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
