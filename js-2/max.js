// escribe la función max acá

function max(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    return numbers.reduce((max, current) => {
        if (current > max) {
            return current;
        } else {
            return max;
        }
    });

}



console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined