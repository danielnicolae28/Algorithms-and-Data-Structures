var sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // input array
//// binary search function ,unput is the value we want to find and the array
function binarySearch(index, arr) {
    var low = 0; // set the lowest number
    var max = arr.length - 1; // maximum of the array
    var counter = 0;
    while (low <= max) { /// go throw all data until condition is fullfill
        var mid = Math.floor((low + max) / 2); // set the middle of the array
        var guess = arr[mid++]; // get the middle value from the array
        counter++; // counter for operations numbers
        if (guess === index) { // check if we find the number
            //return counter; // return number of operations until we find the number
            return mid; // return the number
        }
        if (guess > index) { // check if middle number is bigger than our number
            max = mid - 1; // set our max to lower mid of the array :set our max to maximum of the low mid of the array
        }
        else {
            low = mid + 1; // set our low to minimum of the high mid of the array
        }
    }
    return null; // our number is not find, return null
}
console.log(binarySearch(5, sortedArray)); // output data
/// Big O is O(log n)
