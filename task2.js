function odd_even_Number(nums){
          if( nums%2===1){
           const mult=nums*2;
           return mult;
          }
          else{
            const div=nums/2;
            return div;
           }
}

const num=odd_even_Number(5);
console.log(num);

const e_num=odd_even_Number(6);
console.log(e_num);