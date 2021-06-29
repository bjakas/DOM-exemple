var fizzBuzz = [];
var ul = document.querySelector("ul");

for (var i = 0; i <= 50; i++) {
  if (i === 0) continue; // ako je i u 0 preskoči ga i ne piši fizzbuzz
  var message = "";

  if (i % 3 === 0) message += "fizz";
  if (i % 5 === 0) message += "buzz";
  if (message === "") message = i;

  var li = document.createElement("li");
  li.innerText = message;
  ul.appendChild(li);
}

var itemsToDelete = document.querySelectorAll("li");

setTimeout(function () {
  for (i = 0; i < itemsToDelete.length; i++) {
    var currentItem = itemsToDelete[i];
    currentItem.remove();
  }
}, 10000);



