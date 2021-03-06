const ucFirst = require('../src/ucFirst');

module.exports = function () {
  const base = (this.env.globals.currentFilePointer.replace(this.env.globals.uniqueOpIdStripValue, '')).split('/');
  switch(base.length){
    case 1:
      return base[0].split('.').shift();
    default:
      return ucFirst(base[0]);
  }
};
