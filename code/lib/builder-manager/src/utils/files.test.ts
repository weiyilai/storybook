import { sanatizePath } from './files';

test('sanatizePath', () => {
  const addonsDir = '/Users/username/Projects/projectname/storybook';
  const text = 'demo text';
  const file = {
    path: '/Users/username/Projects/projectname/storybook/node_modules/@storybook/addon-x/dist/manager.mjs',
    contents: Uint8Array.from(Array.from(text).map((letter) => letter.charCodeAt(0))),
    text,
  };
  const { location, url } = sanatizePath(file, addonsDir);

  expect(location).toMatchInlineSnapshot(
    `"/Users/username/Projects/projectname/storybook/node-modules-storybook-addon-x-dist-manager.mjs"`
  );
  expect(url).toMatchInlineSnapshot(
    `"./sb-addons/node-modules-storybook-addon-x-dist-manager.mjs"`
  );
});
