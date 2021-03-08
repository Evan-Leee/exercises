/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  if (arr.length <= k) return arr;
  const result = quickSortInPlace(arr, 0, arr.length - 1);
  return result.slice(0, k);
};

function bubbleSort(arr) {
  for (var i = 0; i< arr.length; i++ ) {
      for(var j = i+1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
              var temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
      }
  }
  return arr;
}

function quickSort(arr) {
  if (arr.length <= 1)  return arr;
  const pointer = arr[0];
  const left = [];
  const right = [];
  for(let i = 1; i< arr.length; i++) {
      if (pointer < arr[i]) {
          right.push(arr[i]);
      } else {
          left.push(arr[i]);
      }
  }
  return quickSort(left).concat([pointer], quickSort(right));
}

/*按从小到大的顺序排序
1.找出【基准点】，设置【左开头下标】和【右开头下标】
2.从左向右遍历直到找到大于【基准点】的数，从右向左遍历直到找到小于【基准点】的数，然后交换，重复此动作直到左右下标相等
3.左右下标相等时，说明这个位置就是【基准点】该在的位置，然后【基准点】跟【左右下标相等点】互换
4.以【左右下标相等点】做分割，左右两各自部分重复123步【递归】
5.返回数组的引用
*/

function partition(arr, start, end) {
  if (start >= end || arr.length <= 1) return start;
  let left = start, right = end;
  const pointer = arr[start];
  while(left !== right) {
      while(left < right && arr[right] >= pointer) {
          right --;
      }
      while(left < right && arr[left] <= pointer) {
          left ++;
      }
      if (left < right) {
          const temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
      }
  }
  arr[start] = arr[left];
  arr[left] = pointer;
  return left;
}

function quickSortInPlace(arr, start, end) {
  if (arr.length <=1 || start > end) return arr;

  const pointer = arr[start];

  const pointerIndex = partition(arr, start, end);
  
  quickSortInPlace(arr, start, pointerIndex - 1);
  quickSortInPlace(arr, pointerIndex + 1, end);
  return arr;
}
