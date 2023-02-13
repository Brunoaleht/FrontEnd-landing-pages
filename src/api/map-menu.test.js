import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return menu if not data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.imgUrl).toBe('');
    expect(menu.link).toBe('');
  });
  it('should map menu to match keys anda values required', () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      logo_text: 'Landing Page',
      logo_link: '#home',
      menu_links: [
        {
          open_in_new_tab: false,
          link_text: 'pricing',
          url: '#pricing',
        },
        {
          open_in_new_tab: false,
          link_text: 'contact',
          url: '#contact',
        },
      ],
      logo: {
        url: 'a.svg',
      },
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page');
    expect(menu.imgUrl).toBe('a.svg');
    expect(menu.link).toBe('#home');
  });

  it('should return an empty array if not links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });
  it('should map links i links passed', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: 'pricing',
        url: '#pricing',
      },
      {},
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('pricing');
    expect(links[0].link).toBe('#pricing');
  });
});
