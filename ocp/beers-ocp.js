'use strict';

class CraftBeer {
  constructor(beer) {
    this.beer = beer;
  }

  execute() {
    this.beer.craft();
  }
}

class VictoriaBeer {
  craft() {
    console.log('easy beer crafting right here');
    return 14;
  }
}

class MinervaStoutBeer {
  craft() {
    console.log('easy beer crafting right here');
    return 21.50;
  }
}

class ModeloEspecialBeer {
  craft() {
    console.log('easy beer crafting right here');
    return 4;
  }
}

const usecase = new CraftBeer(new ModeloEspecialBeer());
usecase.execute(); // el precio de la chela es 4
