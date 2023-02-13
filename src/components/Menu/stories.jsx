import { Menu } from '.';
import LinksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: LinksMock,
    logoData: {
      text: 'Logo',
      imgUrl: '',
      link: '#target',
    },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '300vh', background: 'gray' }}>
      <Menu {...args} />
    </div>
  );
};
