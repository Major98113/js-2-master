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
        case "potato":
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



Order.prototype.getInfoItem = function (id) {
    var item = MyOrder.items[id];
    var price_item = 0;
    var kcal_item = 0;
    if (item.name == "Burger"){
        if (item.size == "small"){
            price_item += 50;
            kcal_item += 20;
        }
        else if (item.size == "big") {
            price_item += 100;
            kcal_item += 40;
        }
        if (item.stuffing != ""){
            if (item.stuffing == "cheese"){
                price_item += 10;
                kcal_item += 20;
            }
            else if (item.stuffing == "salad"){
                price_item += 20;
                kcal_item += 5;
            }
            else if (item.stuffing == "potato"){
                price_item += 15;
                kcal_item += 10;
            }
        }
    }
    else if (item.name == "Salad"){
        if (item.type == "cesar"){
            price_item += 100;
            kcal_item += 20;
        }
        else if (item.type == "olive") {
            price_item += 50;
            kcal_item += 80;
        }
    }
    else if (item.name == "Drink"){
        if (item.type == "cola"){
            price_item += 50;
            kcal_item += 40;
        }
        else if (item.type == "coffee") {
            price_item += 80;
            kcal_item += 20;
        }
    }

    return [price_item,kcal_item];
};



Order.prototype.deleteFood = function (id) {
    debugger;
    var info_item = MyOrder.getInfoItem(id);
    MyOrder.price -= info_item[0];
    MyOrder.kcal -= info_item[1];
    MyOrder.items.splice(id,1);
};





var MyOrder = new Order();