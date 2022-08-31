const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * Returns the color with the opacity.
 *
 * @param variable a color
 * @returns {(function({opacityValue: *}): string)|*}
 */
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

/**
 * Generate the map for the color.
 * 50 100 200...900
 * @param variable
 * @returns {{}}
 */
function generateColorMap(variable) {
  const obj = {};
  for (let i = 0; i <= 900; i += 50) {
    if (i === 0) continue;
    if (i % 100 !== 0 && i !== 50) continue;
    obj[i] = withOpacityValue(`${variable}-${i}`);
  }
  return obj;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.js', './pages/**/*.jsx', './components/**/*.jsx'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: generateColorMap('--color-primary'),
      secondary: generateColorMap('--color-secondary'),
      contrast: generateColorMap('--color-contrast'),
      info: generateColorMap('--color-info'),
      error: generateColorMap('--color-error'),
      success: generateColorMap('--color-success'),
      warning: generateColorMap('--color-warning'),
      caution: generateColorMap('--color-caution'),
      bg: withOpacityValue('--color-bg'),
      transparent: 'transparent',
      inherit: 'inherit',
      black: '#000',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        sans: ['Albert Sans', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '4xs': '0.125rem',
        '3xs': '0.25rem',
        '2xs': '0.375rem',
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1.25rem',
        lg: '2rem',
        xl: '3.5rem',
        '2xl': '5rem',
        '3xl': '9rem',
        '4xl': '14rem',
      },
    },
  },
  plugins: [],
};
