var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food =  'jelly';
};

Grub.prototype.eat = function() {
  console.log('Grub eats ' + this.color + ' ' + this.food);
};
