import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even there is not data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.title).toBe('');
    expect(pagesData.slug).toBe('');
  });
  it('should map data if data exists', () => {
    const pagesData = mapData([
      {
        footer_text: '<p>Hey</p>',
        title: 'title',
        slug: 'slug',
      },
    ])[0];
    expect(pagesData.footerHtml).toBe('<p>Hey</p>');
    expect(pagesData.title).toBe('title');
    expect(pagesData.slug).toBe('slug');
  });
});
