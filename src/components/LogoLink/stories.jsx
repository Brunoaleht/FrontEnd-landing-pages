import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    imgUrl: 'assets/images/logoEx.svg',
    link: 'http://localhost',
  },
  argTypes: {
    text: { type: 'string' },
    imgUrl: { type: 'string' },
    link: { type: 'string' },
  },
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
TextOnly.args = {
  imgUrl: '',
};
