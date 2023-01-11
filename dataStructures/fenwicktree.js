class fenwickTree {
    constructor(arr) {
        this.arr = arr
        this.ft = []
        this.createFenwickTree()
    }

    createFenwickTree() {
        for (let i = 0; i < this.arr.length; i++) {
            let sum = 0

            for (let j = this.And(i); j <= i; j++) {
                sum += this.arr[j]
            }
            this.ft.push(sum)
        }
    }
    
    Sum(i) {
        let sum = 0
        let index = i
        
        while (index > 0) {
            sum += this.ft[index]
            index = this.And(index) - 1
        }
        
        return sum
    }

    changeItem(index, add) {
        if (index <= this.ft.length) {
            this.ft[index] += add
            this.changeItem(this.Or(index), add)
        }
    }
    
    And(i) {
        return i & i + 1
    }

    Or(i) {
        return i | i + 1
    }

    show() {
        console.log(this.ft);
    }

    getSum(startIndex, endIndex) {
        console.log(this.Sum(endIndex) - this.Sum(startIndex - 1))
    }
}

const tree = new fenwickTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
tree.show()
tree.getSum(2, 5)
tree.changeItem(3, -1)
tree.show()
tree.getSum(2, 5)