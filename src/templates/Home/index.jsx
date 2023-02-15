//import { Heading } from '../../components/Heading';
import { useEffect, useState } from 'react';

import { mapData } from '../../api/map-data';

import { Base } from '../Base';
import { Loading } from '../Loading';
import { PageNotFound } from '../PageNotFound';

import { GridTwoColumns } from '../../layout/GridTwoColumns';
import { GridContent } from '../../layout/GridContent';
import { GridSection } from '../../layout/GridSection';
import { useLocation } from 'react-router-dom';
import { GridGallery } from '../../layout/GridGallery';
//import * as Styled from './styles';

export const Home = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathName ? pathName : 'my-page';

    const loading = async () => {
      try {
        const data = await fetch(
          `https://strapi-landing-pages-yiw6.onrender.com/api/pages/?filters[slug]=${slug}&populate[menu][populate]=*&populate[sections][populate]=*`,
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
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = 'Pagina não encontrada';
    }
    if (data && !data.slug) {
      document.title = 'Carregando';
    }
    if (data && data.title) {
      document.title = data.title;
    }
  }, [data]);
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

        if (component === 'sections.section-two-columns') {
          return <GridTwoColumns key={key} {...section} />;
        }
        if (component === 'sections.section-content') {
          return <GridContent key={key} {...section} />;
        }
        if (component === 'sections.section-grid-text') {
          return <GridSection key={key} {...section} />;
        }
        if (component === 'sections.section-grid-image') {
          return <GridGallery key={key} {...section} />;
        }
      })}
    </Base>
  );
};
