const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
]
function superbowlWin(collection){
    let item1=0
    for(const item of collection){
    if(item.result==="W"){
        item1=item.year
        return item.year
    }
    

}
return undefined
}

const winYear=superbowlWin(record)    
console.log(winYear)