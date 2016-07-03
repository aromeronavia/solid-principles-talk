'use strict'

class CraftBeer {
  constructor(beer) {
    this.beer = beer;
  }

  execute() {
    switch(this.beer) {
      case 'modelo especial':
        console.log('easy beer crafting right here');
        break;
      case 'vicky':
        console.log('umm some beer crafting right here');
        break;
      case 'minerva stout':
        console.log('Really complex beer crafting right here');
        break;
      default:
        throw new Error('beer is not supported');
    }

    console.log('The beer was successfully crafted');
  }
}

const usecase = new CraftBeer('modelo especial');
usecase.execute();
