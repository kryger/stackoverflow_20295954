define(['pixi'], function (ThePixiObject) {
  ThePixiObject.customFunction = function () {
    console.log('Pixi now has customFunction()');
  }
  
  // no need to return anything here - we're only interested in the side-effect above
});