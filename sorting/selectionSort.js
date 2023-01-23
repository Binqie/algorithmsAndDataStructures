function SelectionSort(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        let max = 0;

        for (let j = 0; j < i; j++) {        //  finding max element of an subArray
            if (array[j] > array[max]) {
                max = j;
            }
        }
        
        if (array[max] < array[i]) {
            continue;
        }
        
        let temp = array[i];                 //  swapping the max element and last element of an subArray
        array[i] = array[max];
        array[max] = temp;
    }

    return array;
}