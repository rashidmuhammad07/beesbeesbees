var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.color;
  this.food;
  this.eat;
  this.canFly = true;
  this.treasureChest = [];
  this.forage = function() {
    this.treasureChest.push(/*treasure*/);
  };
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
