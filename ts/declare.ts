function f(){
    var a  = 10
    return function g(){
        var b = a+1
        return b
    }
}

var g = f()
g()

function f(shouldInitiallize){
    if(shouldInitiallize){
        var x= 10
    }
    return x
}

f(false) // undefined
f(true) // 10

function sumMatrix(matrix){
    var sum = 0
    for(var i = 0;i<matrix.length;i++){
        var currentRow = matrix[i]
        for(var i=0;i<currentRow.length;i++){
            sum += currentRow[i]
        }
    }
    return sum
}

var matrix = []