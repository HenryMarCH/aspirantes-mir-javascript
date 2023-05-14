// escribe la función maxIndex acá

function maxIndex(array) {
    if (array.length === 0) {
        return -1;
    }
    return array.reduce((maxIndex, currentNumber, currentIndex, array) => {
        if (currentNumber > array[maxIndex]) {
            return currentIndex;
        } else {
            return maxIndex;
        }
    }, 0);
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1