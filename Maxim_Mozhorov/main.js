function Order() {
    this.price = 0;
    this.kcal = 0;
}

Order.prototype.AddSmallBurger = function (){
    this.price +=50;
    this.kcal +=20;
};

Order.prototype.AddBigBurger = function (){
    this.price +=100;
    this.kcal +=40;
};

Order.prototype.AddCesar = function (){
    this.price +=100;
    this.kcal +=20;
};

Order.prototype.AddOlive = function (){
    this.price +=50;
    this.kcal +=80;
};

Order.prototype.AddCola = function () {
    this.price += 50;
    this.kcal += 40;
}

Order.prototype.AddCoffee = function () {
    this.price += 80;
    this.kcal += 20;
}


var my = new Order();