import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-973ea74f.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["hello-world",[[0,"hello-world"]]]], options);
});
