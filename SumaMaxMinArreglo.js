function miniMaxSum(arr) {
    let minSum = Number.MAX_SAFE_INTEGER;
    let maxSum = Number.MIN_SAFE_INTEGER;
    let totalSum = 0;

    // Calculate the total sum and find the minimum and maximum sums
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        let sumExcludingCurrent = totalSum - arr[i];
        minSum = Math.min(minSum, sumExcludingCurrent);
        maxSum = Math.max(maxSum, sumExcludingCurrent);
    }

    console.log(minSum + ' ' + maxSum);
}

// Example usage:
const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);