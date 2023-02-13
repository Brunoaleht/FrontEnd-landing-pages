//import { Heading } from '../../components/Heading';
import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import { Base } from '../Base';
import { Loading } from '../Loading';
import { PageNotFound } from '../PageNotFound';
import { GridTwoColumns } from '../../layout/GridTwoColumns';
import { GridContent } from '../../layout/GridContent';
import { GridSection } from '../../layout/GridSection';
//import { useLocation } from 'react-router-dom';
//import * as Styled from './styles';

export const Home = () => {
  const [data, setData] = useState([]);
  //const location = useLocation();
  useEffect(() => {
    //const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    //const slug = pathName ? pathName : 'olha-a-minha-pagina';

    const loading = async () => {
      try {
        const data = await fetch(
          `http://localhost:1337/api/pages/?filters[slug]=olha-a-minha-pagina&populate[menu][populate]=*&populate[sections][populate]=*`,
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(() => pageData[0]);
      } catch {
        setData(undefined);
      }
    };

    loading();
  }, []);
  if (data === undefined) {
    return <PageNotFound />;
  }
  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { text, link, links, imgUrl } = menu;

  return (
    <Base links={links} footerHtml={footerHtml} logoData={{ text, link, imgUrl }}>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;
        console.log(component);

        if (component === 'section.section-tow-columns') {
          return <GridTwoColumns key={key} {...section} />;
        }
        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }
        if (component === 'section.section-grid-text') {
          return <GridSection key={key} {...section} />;
        }
      })}
    </Base>
  );
};
