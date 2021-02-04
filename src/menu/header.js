const loadModules = () => {
  const files = require.context("./modules", false, /\.js$/);
  const headModules = [];
  files.keys().forEach((key, i) => {
    const module = files(key).default;
    let index = module["index"] ?? i;
    headModules[index] = module;
  });
  return headModules;
};
const head = loadModules();

export default head;
