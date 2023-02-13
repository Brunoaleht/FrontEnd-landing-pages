import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer footerHtml={'# Olá'} />);
    expect(screen.getByText('# Olá')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c4 {
        font-size: 2.4rem;
      }

      .c2 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
      }

      .c0 {
        text-align: center;
        border-top: solid 0.1rem #dddddd;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c0 .c3 {
        font-size: 1.6rem;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
      }

      .c0 .c1 {
        padding-top: 0;
        padding-bottom: 0;
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1 c2"
          >
            <div
              class="c3 c4"
            >
              # Olá
            </div>
          </div>
        </footer>
      </div>
    `);
  });
});
