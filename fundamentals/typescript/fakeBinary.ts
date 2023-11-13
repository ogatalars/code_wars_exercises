// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
const fakeBin = (x:string):string => {
    // your code here
   let result = '';
   for(let i = 0; i < x.length; i++){
     if(Number(x[i]) < 5){
       result += '0';
     } else {
       result += '1';
     }
   }
   return result
};