Package.describe({
  name: 'ui-material-vulcan',
});

Package.onUse((api) => {
  api.use([
    'vulcan:core',
    'vulcan:ui-material'
  ]);

api.mainModule('lib/server/main.js', 'server');
api.mainModule('lib/client/main.js', 'client');
});
