function make_avg(num1, num2){
           let sum=0;
           for(const num of num1){
            sum=sum+num;
           }
            console.log(sum);
           const result=sum/num2;
           return result;

}

const arr= [1,2,3,4,5,6];
const len= arr.length;
const average=make_avg(arr,len);
console.log(average);