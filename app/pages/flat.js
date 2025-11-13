function flat1(arr){
    while(arr.some(i => Array.isArray(i))){
        arr=[].concat(...arr)
    }
    return arr
}
function flat2(arr){
    let arr2=[]
    arr.forEach(i =>{
        if(Array.isArray(i)){
            arr2=arr2.concat(flat2(i))
        }else{
            arr2.push(i)
        }
    })
    return arr2
}
let arr1=[[[[[[1],2],3],4],5],6]
console.log(flat1(arr1));
console.log(flat2(arr1));
console.log (arr1.flat(Infinity))

function flat3(arr){
while(arr.some(i =>Array.isArray(i))){
    arr=[].concat(...arr)
}
return arr
}
console.log(flat3(arr1));