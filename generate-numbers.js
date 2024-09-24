const fs = require('fs');


function createFileWithList(filePath, elementsInList){
    console.time("Generating list");
    var list = makeRandomList(elementsInList);
    console.timeEnd("Generating list");

    console.time("Saving list");
    fs.writeFileSync(filePath,  JSON.stringify(list));
    console.timeEnd("Saving list");
}


function makeRandomList(elementsInList){
    console.log("Generating the list")
    var startList = []
    var midList = []

    for(let i = 100000; i < elementsInList + 100000; i++){
        if(i % 3 == 0){
            continue
        }

        if(i % 2 == 0){
            startList.unshift(i)
            continue
        }
        
        midList.push(i)
    }

    var list = [...startList, ...midList]
    return list
}


createFileWithList("numbers.json", 100)