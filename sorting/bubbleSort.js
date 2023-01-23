function BubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        let isSorted = true;

        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                isSorted = false;
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }

        if (isSorted) return array;
    }
    return array;
}