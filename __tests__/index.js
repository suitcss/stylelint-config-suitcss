import config from '../index.js';
import stylelint from 'stylelint';

describe('stylelint-config-suitcss', () => {
  const lint = async (css) => {
    const result = await stylelint.lint({
      code: css,
      config,
    });

    return result;
  };

  test('should not allow block-no-empty', async () => {
    const { results } = await lint(`a {}`);
    const { warnings } = results[0];

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toContain('block-no-empty');
  });

  test('should enforce color-hex-length to be short', async () => {
    const { results } = await lint(`a { color: #ffffff; }`);
    const { warnings } = results[0];

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toContain('color-hex-length');
  });

  test('should not allow at-rule-no-vendor-prefix', async () => {
    const { results } = await lint(`@-webkit-keyframes slide { from { top: 0; } to { top: 100%; } }`);
    const { warnings } = results[0];

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toContain('at-rule-no-vendor-prefix');
  });

  test('should enforce function-url-quotes', async () => {
    const { results } = await lint(`a { background: url(unquoted-url.jpg); }`);
    const { warnings } = results[0];

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toContain('function-url-quotes');
  });

  test('should allow correct SUIT custom properties usage', async () => {
    const { results } = await lint(`:root { --mainColor: #123456; }`);
    const { warnings } = results[0];

    expect(warnings).toHaveLength(0);
  });
});
