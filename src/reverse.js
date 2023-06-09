'use strict'

Array.prototype.reversePrototype = function() {
    let left = 0;
    let right = this.length - 1;
  
    while (left < right) {
      [this[left], this[right]] = [this[right], this[left]];
      left++;
      right--;
    }
  };
  
  const arr = [1, 2, 3, 4, 5];
  arr.reversePrototype();
  console.log(arr);
  