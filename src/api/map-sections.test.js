import { mapSectionContent, mapSections, mapSectionTwoColumns, mapTextGrid, mapImageGrid } from './map-sections';

const pageFake = require('./pages/page2Data.json');

describe('map-sections', () => {
  it('should render predefined sections if not data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });
  it('should map sections with data', () => {
    const data = mapSections(pageFake[0].sections);
    expect(data[1].component).toBe('section.section-content');
  });
  it('should test sections with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);
    const withNoComponent = mapSections([{}]);
    expect(withNoTextOrImageGrid).toEqual([{ __component: 'section.section-grid' }]);
    expect(withNoComponent).toEqual([{}]);
  });
  it('should test section.section-grid with no image_grid and text_grid', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
    ]);
    expect(withNoTextOrImageGrid.length).toBe(2);
  });
  it('should map section two columns if data is not exists ', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.text).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.imgUrl).toBe('');
  });
  it('should map section two columns if data is exists ', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,

        section_id: 'contact',
      },
      image: {
        url: 'a.svg',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('contact');
    expect(data.imgUrl).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('title');
  });
  it('should map section content if not exists data', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
    expect(data.sectionId).toBe('');
  });
  it('should map section content if exists data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'NEWS COVERAGE',
      content: '<p>olá</p>',
      metadata: { id: 2, name: 'intro', section_id: 'intro', background: false },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.title).toBe('NEWS COVERAGE');
    expect(data.html).toBe('<p>olá</p>');
    expect(data.sectionId).toBe('intro');
  });
  it('should map text-grid if data exists', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      description: 'Debitis cum delectus molestias.',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'Lorem ipsum',
        },
        {
          title: 'Teste 2',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        },
        {
          title: 'Teste 3',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        name: 'grid-one',
        section_id: 'grid-one',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('Debitis cum delectus molestias.');
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Lorem ipsum');
  });
  it('should map text-grid is not data', () => {
    const data = mapTextGrid();
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.sectionId).toBe('');
  });
  it('should map image-grid without  data', () => {
    const data = mapImageGrid();
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.sectionId).toBe('');
  });
  it('should map image-grid with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      description: 'Distinctio veritatis',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'abc',
            url: '13a.jpg',
          },
        },
        {
          image: {
            alternativeText: 'Um livro grande aberto',
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_c073b11d09.jpg',
          },
        },
        {
          image: {
            alternativeText: 'Imagem do topo de uma cidade grande',
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_2_38651a645b.jpg',
          },
        },
      ],
      metadata: {
        background: false,
        section_id: 'gallery',
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('Distinctio veritatis');
    expect(data.sectionId).toBe('gallery');
    expect(data.grid[0].altText).toBe('abc');
    expect(data.grid[0].imgUrl).toBe('13a.jpg');
  });
});
