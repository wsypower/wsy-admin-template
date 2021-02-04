const loadModules = () => {
  const files = require.context("./modules", false, /\.js$/);
  const sliderModules = [];
  files.keys().forEach(key => {
    const module = files(key).default;
    sliderModules.push(module);
  });
  return sliderModules;
};
const slider = loadModules();

export default slider;
