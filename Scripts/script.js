//$('body').css("background-color", "yellow");
// when button is clicked
// IIFEW = immediatley invoked f/n expression
$("#btnGetAnimal").on('click', function(){
// get the user name
  let bakername = $('#bakersname').val();
//   var variablename = ... let(const)
   $("#greetingArea").text("Hi there, " + bakername + "!");
// give them greeting
// next. also tell the spirit animal
   let randomanimal = spiritanimals[(Math.floor(Math.random() * spiritanimals.length))];
  $("#animalarea").text("Your spirit animal is: " + randomanimal)
})
 let spiritanimals = ["🫎","🫏","🦈","🐟","🪱","🐔","🦆"]
