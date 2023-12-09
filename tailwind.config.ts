/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      "baseGrey": "#4E6E81",
      "baseBeige":" #F9DBBB",
      "baseRed":" #FF0303",
      "baseCharcoal":" #2E3840",
    },
    fontFamily: {
      syne: ['Syne', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    screens: {
      '2xl': {'min': '1535px'},
      'xl': {'min': '1279px'},
      'lg': {'min': '1323px'},
      'md': {'min': '767px', 'max': '1100px'},
      'sm': {'min': '340px','max': '500px'},
    },
    extend: {
      fontFamily: {
        "MajorMonoDisplay": ['Major Mono Display', 'monospace'],
        "Megrim": ["Megrim"],
        "Quicksand": ['Quicksand', 'sans-serif'],
        "Montserrat": ["Montserrat Subrayada", "sans-serif"],
        "PressStart2P": ["Press Start 2P", "cursive"],
        "RubikMonoOne": ["Rubik Mono One", "sans-serif"],
        "AlegreyaSans" : ['Alegreya Sans', "sans-serif"],
        "MontserratAlternates" : ['Montserrat Alternates', "sans-serif"],
        "Philosopher" : ['Philosopher', "sans-serif"],
        "TenorSans": ['Tenor Sans', 'sans-serif'],
        "JuliusSansOne": ['Julius Sans One', "sans-serif"],
        "Thasadith" : ['Thasadith', "sans-serif"],
        "Fahkwang": ['Fahkwang', "sans-serif"],
        "AdventPro": ['Advent Pro', "sans-serif"],
        "Kalam": ['Kalam', 'cursive'],
        "BubbleGum": ['Bubblegum Sans', 'cursive'],
        "PermanentMarker": ['Permanent Marker', 'cursive'],
        "RubikVinyl": ['Rubik Vinyl', 'cursive'],
        "Anton": ['Anton', 'sans-serif'],
        "Oswald": ['Oswald', 'sans-serif'],
        "BebasNeue": ['Bebas Neue', 'sans-serif'],
        "Jost": ['Jost', 'sans-serif'],
        "Belanosima": ['Belanosima', 'sans-serif'],
        "BodoniModa": ['Bodoni Moda', 'serif'],
        "DarkerGrotesque": ['Darker Grotesque', 'sans-serif'],
        "ElMessiri": ['El Messiri', 'sans-serif'],
        "Kodchasan": ['Kodchasan', 'sans-serif'],
        "Manrope": ['Manrope', 'sans-serif'],
        "ReemKufi": ['Reem Kufi', 'sans-serif'],
        "Syncopate": ['Syncopate', 'sans-serif'],
        "Unbounded": ['Unbounded', 'sans-serif'],
        "WorkSans": ['Work Sans', 'sans-serif'],
        "Syne": ['Syne', 'sans-serif'],
        "Inter": ['Inter', 'sans-serif'],
        "PetitFormal": ['Petit Formal Script', 'cursive'],
      },
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                additionalData: `@import "./sr/styles/variables.scss";`,
              },
            }
          ], 
        },
      ]
    },
  },
  plugins: [
    require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
  ],
}
// export default config;
