function Burger() {
}

Burger.prototype.Add = function (component) {
    switch (component) {
        case 'cheese':
            this.price += 10;
            this.kcal += 20;
            break;
        case 'salad':
            this.price += 20;
            this.kcal += 5;
            break;
        case 'potato':
            this.price += 15;
            this.kcal += 10;
    }
}

function BigBurger() {
    this.price = 100;
    this.kcal = 40;
}

function SmallBurger() {
    this.price = 50;
    this.kcal = 20;
}

BigBurger.prototype = new Burger();
SmallBurger.prototype = new Burger();


var Order = new SmallBurger();