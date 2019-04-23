$(".menu-list_burger .btn").click(function () {
    var size = $('.menu-list_burger .burger-type-class input[type=radio]:checked').val();
    var stuffing = $('.menu-list_burger .burger-stuffing-type-class input[type=radio]:checked').val();
    MyOrder.AddBurger(size, stuffing);
    if(stuffing === ""){
        $(".order-list ul").append("<li>Гамбургер("+size+") без дополнительных ингридиентов <span data-id='"+(MyOrder.items.length-1)+"' class='glyphicon glyphicon-trash' aria-hidden='true' style='cursor: pointer'></span></li>");
    }
    else {
        $(".order-list ul").append("<li>Гамбургер("+size+") c "+stuffing+" <span data-id='"+(MyOrder.items.length-1)+"' class='glyphicon glyphicon-trash' aria-hidden='true' style='cursor: pointer'></span></li>");
    }
    ShowTotalPrice();

});

$(".menu-list_salad .btn").click(function () {
    var type = $('.menu-list_salad input[type=radio]:checked').val();
    MyOrder.AddSalad(type);
    $(".order-list ul").append("<li>Салат: "+type+" <span data-id='"+(MyOrder.items.length-1)+"' class='glyphicon glyphicon-trash' aria-hidden='true' style='cursor: pointer'></span></li>");
    ShowTotalPrice();
});

$(".menu-list_drink .btn").click(function () {
    var type = $('.menu-list_drink input[type=radio]:checked').val();
    MyOrder.AddDrink(type);
    $(".order-list ul").append("<li>Напиток: "+type+" <span data-id='"+(MyOrder.items.length-1)+"' class='glyphicon glyphicon-trash' aria-hidden='true' style='cursor: pointer'></span></li>");
    ShowTotalPrice();
});



$( ".order-list ul" ).on("click","li .glyphicon-trash", function(event) {
    MyOrder.deleteFood($(this).attr("data-id"));
    UpdateList();
});

$('button').click(function () {
   $(".order-list").css("display","block");
});


$('.order-list .btn-info').click(function () {
    FinishOrder();
});


function UpdateList() {
    ClearVisualList();
    MyOrder.items.forEach(function (item, i, arr) {
        if (item.name == "Burger"){
            var size = item.size;
            var stuffing = item.stuffing;
            if(stuffing === ""){
                $(".order-list ul").append("<li>Гамбургер("+size+") без дополнительных ингридиентов <span data-id='"+i+"' class='glyphicon glyphicon-trash' aria-hidden='true' style='cursor: pointer'></span></li>");
            }
            else {
                $(".order-list ul").append("<li>Гамбургер("+size+") c "+stuffing+" <span data-id='"+i+"' class='glyphicon glyphicon-trash' aria-hidden='true' style='cursor: pointer'></span></li>");
            }
        }
        else if (item.name == "Salad"){
            var type = item.type;
            $(".order-list ul").append("<li>Салат: "+type+" <span data-id='"+i+"' class='glyphicon glyphicon-trash' aria-hidden='true' style='cursor: pointer'></span></li>");
        }
        else if (item.name == "Drink"){
            var type = item.type;
            $(".order-list ul").append("<li>Напиток: "+type+" <span data-id='"+i+"' class='glyphicon glyphicon-trash' aria-hidden='true' style='cursor: pointer'></span></li>");
        }
    });
    ShowTotalPrice();
}


function ClearVisualList() {
    $( ".order-list ul" ).empty();
}

function ShowTotalPrice() {
    $(".total-price").html("Итого: "+MyOrder.price + " ("+MyOrder.kcal+" kcal)");
}

function FinishOrder() {
    $("button").each(function (i,elem) {
        $(this).prop("disabled", true);
    });
    $("input[type=radio]").each(function (i,elem) {
        $(this).prop("disabled", true);
    });

    $("ul li").each(function (idx, item) {
        $(this).css("display","none");
    });


    $(".order-list").append("<p>Ваш заказ успешно оформлен, мы свяжемся с вами в ближайшее время. Для создания нового заказа перезагрузите страницу</p>");

}