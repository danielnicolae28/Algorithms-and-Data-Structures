function findSmallest(arr :number[]){
    let smallest:number = arr[0]
    // let smallest_index:number = 0


    for(let i:number = 0; i<=arr.length ;i++){
        if(arr[i]<smallest){
            smallest=arr[i]
            // smallest_index = i;
        }


    }
    return smallest;
}




function selectionSort(arr:number[]){
    let newArr:number[]=[];
    for(let i :number=0;i<=arr.length;i++){
        let smallest:number = findSmallest(arr);
   
        newArr.pop()
        newArr.push(smallest)
    }
    return newArr;
}




console.log(selectionSort([5,3,10,7,20,11,100,4,6,8]))