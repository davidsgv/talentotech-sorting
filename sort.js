const burbuja = require("./algorithms/burbuja");
const selection = require("./algorithms/seleccion");
const isOrdered = require("./test")
const fs = require("fs");

var numbers = [1,7,4,3,8,10,1,2,9,8,7,20,22,21,19,18,5];
var results = []
try{
    var file = fs.readFileSync("./numbers.json");
    numbers = JSON.parse(file)
}catch(error){
    console.error(error);
    process.exit()
}
console.log("file readed")

function checkOrderAlgorithm(numbers, orderFunction, orderFunctionName){
    let orderedNumbers = [];
    let errorMessage = "";

    const t0 = performance.now();
    try {
        orderedNumbers = orderFunction(numbers);
    } catch (error) {
        errorMessage = error
    }
    const t1 = performance.now();

    results.push(
        {
            name: "Sorting: " + orderFunctionName,
            time: t1 - t0,
            isOrdered: isOrdered(orderedNumbers),
            error: errorMessage != "",
            errorMessage: errorMessage
        }
    )
}

function printResults(){
    results.sort((a,b)=>{
        if(a.error) return 1;
        if(b.error) return -1;
        return a.time - b.time;
    });

    results.forEach((element)=>{
        console.log("-------------------------------------------");
        console.log(element.name);
        console.log("sorting time:", element.time);
        console.log("Is ordered: ", element.isOrdered);
        if(element.error){
            console.log("Error: ", element.errorMessage);
        }
        console.log("-------------------------------------------")
    })
}

checkOrderAlgorithm([...numbers], burbuja.iterative, "burbuja iterativo");
checkOrderAlgorithm([...numbers], burbuja.recursive, "burbuja recursivo");
checkOrderAlgorithm([...numbers], burbuja.recursiveOptimized, "burbuja recursivo optimizado");
checkOrderAlgorithm([...numbers], selection.iterative, "selection iterativo");

printResults();