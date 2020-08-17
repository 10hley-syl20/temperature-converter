//variables
const inputcel = document.querySelector('.input1')
const inputfa = document.querySelector('.input2')
let celsius = 0 ;
let fahrenheit = 0;



inputcel.addEventListener('change',function(){  
   celsius = this.value;
  if (celsius !== '') {
    result1 = ((celsius * 9 / 5) + 32);
    fahrenheit = result1;
inputfa.value = fahrenheit;
  } else{
    inputfa.value = '';
  }

  //inputfa.value = fahrenheit;
    });



inputfa.addEventListener('change',function(){
fahrenheit = this.value;
if(fahrenheit !== ''){
  result2 = ((fahrenheit-32)* 5/9);
  celsius = result2;
  inputcel.value = celsius;
} else{
  inputcel.value = '';
}
}
)


