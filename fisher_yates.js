let fisherYatesShuffle = function (inputArray) {
    for (inputArray.length+1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let t = inputArray[i]
        inputArray[i] = inputArray[j];
        inputArray[j] = t;
    }
}