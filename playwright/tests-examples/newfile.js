function findD(arr) {
    const seen = new Set();
    return arr.filter(item => {
        if (seen.has(item)) {
            return true;
        }
        seen.add(item)
        return false;
    });
}

const array = [1, 2, 3, 4, 2, 5, 1, 3];
const duplicates = findD(array);
console.log(duplicates);

function findLargestandSmallest(arr) {
    let largestNumber = arr[0];
    let shortestNumber = arr[0];

    arr.forEach(element => {
        if (element > largestNumber) {
            largestNumber = element;
        } else if (element > largestNumber) {
            shortestNumber = element;
        } 
    });
    return [largestNumber, shortestNumber];
}

const largestNumber = findLargestandSmallest(array);
console.log(largestNumber[0]);
console.log(largestNumber[1]);

function findLargestandSmallestBySort(arr) {
   
    return arr.sort((a, b) => { return a - b });
    
}

const largestNumberSort = findLargestandSmallestBySort(array);
console.log(largestNumberSort[largestNumberSort.length - 1]);
console.log(largestNumberSort[0]);
