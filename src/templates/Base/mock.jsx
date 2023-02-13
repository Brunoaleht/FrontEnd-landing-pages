import linksMock from '../../components/NavLinks/mock';

import mockGrid from './mockGrid';

import { GridSection } from '../../layout/GridSection';

export const mockBase = {
  children: (
    <>
      <GridSection {...mockGrid} background={true} />
      <GridSection {...mockGrid} />
      <GridSection {...mockGrid} background={true} />
      <GridSection {...mockGrid} />
      <GridSection {...mockGrid} background={true} />
      <GridSection {...mockGrid} />
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<p>Teste de Footer</p>',
};
