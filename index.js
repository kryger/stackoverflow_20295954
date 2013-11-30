requirejs.config({
        paths: {
            pixi: 'pixi.dev'
        },
        shim: {
           pixi: {
              exports: 'PIXI'
         }
      }
});

require([
    'pixi',
    'pixi-extensions'
], function (pixi, ignoreMe) {
    console.log('Pixi ready?', pixi);
    pixi.customFunction();
});
