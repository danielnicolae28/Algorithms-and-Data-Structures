function countDown(i:number){


    console.log(i);
    if(i<=0){
        return;     /// base case
     }else{
        countDown(i - 1);  /// recursive case
    }


}

console.log(countDown(5));

