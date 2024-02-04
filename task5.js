function odd_even(num){
      if(num%2===0){
        return 'Even';
      }
      else{
       return 'odd';
      }
}

const number=odd_even(5);
console.log(number);