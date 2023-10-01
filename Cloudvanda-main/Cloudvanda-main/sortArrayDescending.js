function sortArrayDescending(arr) {
   
    arr.sort(function(a, b) {
        return b - a; 
    });
}

const originalArray = [5, 2, 9, 1, 5, 6];
console.log("Original Array:", originalArray);

sortArrayDescending(originalArray);

console.log("Sorted Array (Descending):", originalArray);


// run this code in browser console