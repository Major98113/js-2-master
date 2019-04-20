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
            this.price += 40;
            this.kcal += 50;
            break;
        case "big":
            this.price += 100;
            this.kcal += 80;
            break;
    }

    switch (stuffing) {
        case "cheese":
            this.price += 15;
            this.kcal += 10;
            break;
        case "salad":
            this.price += 25;
            this.kcal += 30;
            break;
        case "potate":
            this.price += 7;
            this.kcal += 12;
            break;
    }
    this.items.push(Burger);
};







var my = new Order();