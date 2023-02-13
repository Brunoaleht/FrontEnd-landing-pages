import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Teste SectionBackground</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste cum impedit sint. Incidunt delectus accusamus
          necessitatibus facere. Perspiciatis quibusdam repudiandae nobis veritatis debitis dolores, tenetur quisquam
          qui sapiente repellendus libero.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
