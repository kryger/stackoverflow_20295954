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
    'pixi'
], function (pixi) {
    console.log('Pixi ready?', pixi);
});
