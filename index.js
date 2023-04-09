const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
]
function superbowlWin(record){
    if(record.result==="W"){
        return record.year
    }
    else
    {
        return undefined
    }
}

console.log(record.find(superbowlWin))