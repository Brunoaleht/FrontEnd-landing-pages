import { GridContent } from '../../layout/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html="A página que você busca não foi encontrada. <a href='/'> Clique aqui para voltar</a>"
    />
  );
};
