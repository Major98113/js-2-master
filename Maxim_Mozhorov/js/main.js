function Order() {
    this.items = [];
    this.price = 0;
    this.kcal = 0;

}

Order.prototype.AddBurger = function (size, stuffing) {
    var Burger = {
        name: "Burger",
        size : size,
        stuffing : stuffing,
    };

    switch (size) {
        case "small":
            this.price += 50;
            this.kcal += 20;
            break;
        case "big":
            this.price += 100;
            this.kcal += 40;
            break;
    }

    switch (stuffing) {
        case "cheese":
            this.price += 10;
            this.kcal += 20;
            break;
        case "salad":
            this.price += 20;
            this.kcal += 5;
            break;
        case "potate":
            this.price += 15;
            this.kcal += 10;
            break;
    }
    this.items.push(Burger);
};

Order.prototype.AddSalad = function (type) {
    var Salad = {
        name: "Salad",
        type: type,
    };

    switch (type) {
        case "cesar":
            this.price += 100;
            this.kcal += 20;
            break;
        case "olive":
            this.price += 50;
            this.kcal += 80;
            break;
    }
    this.items.push(Salad);
};


Order.prototype.AddDrink = function (type) {
    var Drink = {
        name: "Drink",
        type: type,
    };

    switch (type) {
        case "cola":
            this.price += 50;
            this.kcal += 40;
            break;
        case "coffee":
            this.price += 80;
            this.kcal += 20;
            break;
    }
    this.items.push(Drink);
};


Order.prototype.getOrderList = function () {
    console.log("Your price list "+this.price+" tubrics");
    console.log("Your calories "+this.kcal+" kcal");
    console.log('Your list of order:');
    console.log(this.items);
};

Order.prototype.getPrice = function () {
    return "Your price list "+this.price+" tubrics";
};

Order.prototype.getCalories = function () {
    return "Your calories "+this.kcal+" kcal";
};




var MyOrder = new Order();