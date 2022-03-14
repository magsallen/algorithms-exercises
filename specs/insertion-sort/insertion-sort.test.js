/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

function insertionSort(nums) {
  // outer loop
  // work forwards through the unsorted part of the array
  // save the value at index 1 to current value, this is the value we want to insert
  // set the index to 0, one position before the current value
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    let index = i - 1
    // inner loop
    // works backwards through the sorted part of the array
    // if the value at index is greater than the value we want to insert
    // replace the next value in the list with the currently indexed one
    // decrese the index and continue replacing all values until you reach 0
    for (index; nums[index] > current; index--) {
      // move number one position to the 
      nums[index + 1] = nums[index];
    }
    // then replace the next index with the value stored in current
    // and repeat the loop to continue iterating
    nums[index + 1] = current;
  }
  return nums;
}

// unit tests
// do not modify the below code
test.only("insertion sort", function () {
  console.log('TEST RUNNING');
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
