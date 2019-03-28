test('loads the package.json into process.env', () => {
  require('./index.js').config();
  expect(process.env.npm_package_name).toBe('npm-package-to-env');
  expect(process.env.npm_package_main).toBe('index.js');
  expect(process.env.npm_package_scripts_test).toBe('jest');
  // explicitely check for the camelCase case
  expect(process.env.npm_package_devDependencies_jest).toBe('^24.5.0');
});
