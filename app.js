/* var fizzBuzz = []; - tu nam ovo nije potrebno */

var ul = document.querySelector("ul");

for (var i = 1; i <= 50; i++) {
  /* if (i === 0) continue;  ako je i u 0 preskoči ga i ne piši fizzbuzz - kada krećemo od 0 */
  var message = "";

  if (i % 3 === 0) message += "fizz";
  if (i % 5 === 0) message += "buzz";
  if (message === "") message = i;

  var li = document.createElement("li");
  li.innerText = message;
  ul.appendChild(li);
}

// Bonus 1. version with for loop

/*

var itemsToDelete = document.querySelectorAll("li");

setTimeout(function () {
  for (i = 0; i < itemsToDelete.length; i++) {
    var currentItem = itemsToDelete[i];
    currentItem.remove();
  }
}, 10000);

*/

// Bonus 2. version - quick one with ul.remove()

setTimeout(function () {
  ul.remove();
}, 10000);


// Additional bonus with adding li in intervals by setting counter

/*

var ul = document.querySelector("ul");
var counter = 1; // counter start at 1

var fizzBuzz = setInterval(function () {
  var message = "";
  var li = document.createElement("li");

  if (counter % 3 === 0) {
    message += "fizz";
  }
  if (counter % 5 === 0) {
    message += "buzz";
  }
  if (message === "") {
    li.innerText = counter;
  } else {
    li.innerText = message;
  }
  ul.appendChild(li);

  if (counter === 50) clearInterval(fizzBuzz);
  counter += 1;
}, 500);

*/
