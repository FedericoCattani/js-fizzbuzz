//Data
let value = '';


//Logic 
for (let i = 1; i <= 100; i++) {

  value = i;

  if (i % 3 === 0){
    value = 'Fizz';
  }

  if (i % 5 === 0){
    value = 'Buzz';
  }

  //if (i % 15 === 0) questo perché si ripete ogni 15
  if (i % 3 === 0 && i % 5 === 0){
    value = 'FizzBuzz'
  }
  
  console.log(value);
}

//Result
