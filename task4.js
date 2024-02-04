function count_zero(str){
     let count=0;
      for(const num of str){
        if(num==='0'){
           count++;
        }
      }
      return count;
}

const binary= count_zero('0100111000111');
console.log(binary);
