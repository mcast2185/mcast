import { buildLegacyTheme, StudioTheme } from "sanity";


const props = {
  "--my-white": "#fff",
  "--my-black": "#000000",
  "--my-Charcoal": "#2E3840",
  "--my-Red": "#FF0303",
  "--my-Beige": "#F9DBBB",
  "--my-Grey": "#4E6E81",
};

const myTheme: StudioTheme = buildLegacyTheme({

  "--black": props["--my-black"],
  "--white": props["--my-white"],
  
  "--gray": "#4E6E81",
  "--gray-base": "#4E6E81",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],


  "--brand-primary": props["--my-Charcoal"],


  "--default-button-primary-color": props["--my-Charcoal"],
  "--default-button-success-color": props["--my-Grey"],
  "--default-button-warning-color": props["--my-Beige"],
  "--default-button-danger-color": props["--my-Red"],


  "--state-info-color": props["--my-Charcoal"],
  "--state-success-color": props["--my-Grey"],
  "--state-warning-color": props["--my-Beige"],
  "--state-danger-color": props["--my-Red"],


  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--my-Red"],
});

export default myTheme;