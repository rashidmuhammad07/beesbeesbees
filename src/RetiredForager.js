var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  this.forage = function() {
    return 'I am too old, let me play cards instead';
  };
  this.food;
  this.eat;
  this.treasureChest;
  this.gamble = function() {
    this.treasureChest.push(/*treasure */);
  };
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
