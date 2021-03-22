

function quickSort(arr, start, end) {
    if (end - start < 2) {
        return arr;
    }
    
    const pivot = hoareParition(arr, start, end);
    quickSort(arr, 0, pivot);
    quickSort(arr, pivot + 1, end);

    return arr;
}

function hoareParition(arr, lo, hi) {
    const pivot = Math.floor((hi + lo) / 2);
    const pivotVal = arr[pivot];

    while (true) {
        while (arr[lo] < pivotVal) {
            lo += 1;
        }
        while (arr[hi] > pivotVal) {
            hi -= 1;
        }
        if (lo >= hi) {
            return hi;
        }
        const lower = arr[lo];
        arr[lo] = arr[hi];
        arr[hi] = lower;
        lo += 1;
        hi -= 1;
    }
}
  

module.exports = {
    quickSort,
}