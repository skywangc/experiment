/**
 * 快速排序
 * 在数据集之中，选择一个元素作为"基准"（pivot）。
 * 所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
 * 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 * @param arr 
 * @returns 
 */

function quicksort(arr: number[]): number[] {
      if (arr.length <= 1) {
            return arr;
      }


      // 取第一数当基准
      const benchmark = arr[0];
      const left = [];
      const right = [];

      for (let index = 1; index < arr.length; index++) {
            if (arr[index] >= benchmark) {
                  right.push(arr[index])
            } else {
                  left.push(arr[index])
            }
      }

      return quicksort(left).concat([benchmark], quicksort(right));
}

// 测试
console.log(quicksort([23, 435, 656, 343, 657, 76, 34, 979, 231, 347, 126, 35]))