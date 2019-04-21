$(".menu-list_burger .btn").click(function () {
    var size = $('.menu-list_burger .burger-type-class input[type=radio]:checked').val();
    var stuffing = $('.menu-list_burger .burger-stuffing-type-class input[type=radio]:checked').val();;
    MyOrder.AddBurger(size, stuffing);
    if(stuffing === ""){
        $(".order-list ul").append("<li>Гамбургер("+size+") без дополнительных ингридиентов</li>");
    }
    else {
        $(".order-list ul").append("<li>Гамбургер("+size+") c "+stuffing+"</li>");
    }
    $(".total-price").html("Итого: "+MyOrder.price + " ("+MyOrder.kcal+" kcal)");

});


$(".menu-list_salad .btn").click(function () {
    var type = $('.menu-list_salad input[type=radio]:checked').val();
    MyOrder.AddSalad(type);
    $(".order-list ul").append("<li>Салат: "+type+"</li>");
    $(".total-price").html("Итого: "+MyOrder.price + " ("+MyOrder.kcal+" kcal)");
});

$(".menu-list_drink .btn").click(function () {
    var type = $('.menu-list_drink input[type=radio]:checked').val();
    MyOrder.AddDrink(type);
    $(".order-list ul").append("<li>Напиток: "+type+"</li>");
    $(".total-price").html("Итого: "+MyOrder.price + " ("+MyOrder.kcal+" kcal)");
});