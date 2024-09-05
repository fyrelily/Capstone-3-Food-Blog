


$("#more-ingredients").on("click", function(){
    $("#ingredients-list").append('<input class="ingredients" type="text" name="ingredients" placeholder="Ingredient and Amount">');
});

$("#more-instructions").on("click", function(){
    $("#cooking-steps").append('<input class="instructions" type="text" name="instructions" placeholder="Cooking instrutions">');
});

// $("input[name='difficulty']").on("change", function(){
// var difficulty = $("input[name='difficulty']").attr("value");
// console.log(difficulty)
// })