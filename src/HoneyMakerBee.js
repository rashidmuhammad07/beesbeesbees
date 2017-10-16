var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.color;
  this.food;
  this.honeyPot = 0;
  this.makeHoney = function() {
    return this.honeyPot + 1;
  };
  this.giveHoney = function() {
    return this.honeyPot - 1;
  };
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
