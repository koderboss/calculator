const form = document.querySelector('form');
const operator = document.querySelector("#select_operator");


form.addEventListener('submit', function(e){
  e.preventDefault();
  const number_one = parseFloat(document.querySelector('#number_one').value);
  const number_two = parseFloat(document.querySelector('#number_two').value);
  const output = document.querySelector(".result");
  const select_operator = operator.value;
  
  let result;
  switch(select_operator){
    case '+':
      result = number_one + number_two;
      break;
    case '-':
      result = number_one - number_two;
      break;
    case '*':
      result = number_one * number_two;
      break;
    case '/':
      result = number_one / number_two;
      break;
  }

  output.textContent = `Result: ${result}`;
  
})
