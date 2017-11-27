const {
  FuseBox,
  BabelPlugin,
  CSSPlugin,
  PostCSSPlugin,
  QuantumPlugin,
  WebIndexPlugin,
  Sparky,
} = require('fuse-box');

let app; // Config variable
let isProd = false; // Determine if build for prod or not

Sparky.task('config', () => {
  app = FuseBox.init({
    homeDir: 'src',
    sourceMaps: !isProd,
    output: 'dist/$name.js',
    cache: !isProd,
    log: true,
    debug: true,
    target: 'browser',
    plugins: [
      BabelPlugin({
        config: {
          sourceMaps: true,
          presets: ['env', 'stage-1', 'react'],
          plugins: [
            'transform-regenerator',
            'transform-async-to-generator',
            'syntax-async-functions',
          ],
        },
      }),
      [
        PostCSSPlugin([
          require('postcss-import')({ path: ['src/styles'] }),
          require('autoprefixer'),
          require('cssnano'),
        ]),
        CSSPlugin({
          outFile: name => `dist/${name}`,
          inject: true,
        }),
      ],
      WebIndexPlugin({
        template: 'src/index.html',
        path: '/react-coding-challenge/',
      }),
      isProd &&
        QuantumPlugin({
          bakeApiIntoBundle: 'bundle',
          containedAPI: true,
          uglify: { es6: true },
          treeshake: true,
          target: 'browser',
        }),
    ],
  });
});

// Clean the dist folder everytime
Sparky.task('clean', () => {
  return Sparky.src('dist').clean('dist');
});

// Set the config in production mode
Sparky.task('prodSetup', () => {
  isProd = true;
});

// Move the asset folder to the dist folder
Sparky.task('moveAssets', () => {
  return Sparky.src(['./assets/**/*.*', './feed/**/*.*']).dest('./dist');
});

// DEV config
Sparky.task('dev', ['clean', 'config', 'moveAssets'], () => {
  app.dev();

  app
    .bundle('bundle')
    .instructions('> index.js')
    .watch()
    .hmr();

  app.run();
});

// PROD config
Sparky.task('default', ['clean', 'prodSetup', 'config', 'moveAssets'], () => {
  app.bundle('bundle').instructions('> index.js');
  app.run();
});