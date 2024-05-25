const arr = ["12", "5", "34", "45", "54"];


console.log("see script file")


//Custom Map Implementation Polyfill

/*

// const NewArray = arr.map((value, index, arr) => {
    //     return value * (index + 1)
    // })
    // console.log("Using Map", NewArray)


    Array.prototype.CustomMap = function (cb) {
        var temp = [];
        for (let i = 0; i < this.length; i++) {
            temp.push(cb(this[i], i, this));
        }
        return temp
    }

    const NewArrayUsingCustomMap = arr.CustomMap((value, index, arr) => {
        return value * (index + 1)
    })
    console.log("Using NewArrayUsingCustomMap", NewArrayUsingCustomMap)

    */

//Custom Filter Implementation Polyfill

/*

Array.prototype.CustomFilter = function (cb) {

    let temp = []

    for (let i = 0; i < this.length; i++) {
        let IsConditionTrue = cb(this[i], i, this)
        if (IsConditionTrue) temp.push(this[i])

        }
        return temp;
    }

    const NewArray = arr.filter((value, index, arr) => {
        return value > 50
    })
    console.log("Using Filter", NewArray)


    const NewArrayUsingCustomFilter = arr.CustomFilter((value, index, arr) => {
        return value > 50
    })
    console.log("Using NewArrayUsingCustomFilter", NewArrayUsingCustomFilter)

    */



//Implementating Reduce Function
/*

Array.prototype.CustomReduce = function (cb, intialValue) {
    let computatedValue = intialValue;
    
    for (let i = 0; i < this.length; i++) {
        computatedValue = computatedValue ? cb(computatedValue, this[i], i, this) : this[0]
    }
    return computatedValue
    
}

const Sum = arr.reduce((accumulator, value, index, arr) => {
    return parseInt(accumulator) + parseInt(value)
}, 123)
console.log("Using Reduce Finding sum", Sum)


const NewArrayUsingReduce = arr.CustomReduce((accumulator, value, index, arr) => {
    return parseInt(accumulator) + parseInt(value)
}, 123)
console.log("Using NewArrayUsingReduce", NewArrayUsingReduce)
*/