
const $container = document.getElementsByClassName('container');
const $list = document.getElementById('list')
console.log($container);
console.log($list);

function fizzBuzz() {
for (let number=1; number<101; number++ ) {
  let print = '';
    if (number % 3 === 0 && number % 5 === 0) {
      print += 'FizzBuzz';
  } else if (number % 5 === 0) {
  print += 'Buzz';
  } else if (number % 3 === 0) {
    print += 'Fizz';
    } 
  $list.innerHTML += "<li>" + (print || number) + "</li>"; 
    console.log(print || number);
}

}

fizzBuzz();
