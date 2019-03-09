function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    inputArray.forEach((element) => {
        if(element === elemToReplace) {
            element = substitutionElem;
        }
    });

    return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));