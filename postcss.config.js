module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {
      
    },
    autoprefixer: {},
    'tailwindcss/nesting': 'postcss-nesting',
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
			autoprefixer: {
				flexbox: 'no-2009'
			},
			stage: 3,
		}
  },
}
