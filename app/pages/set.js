//数组去重
let arr = [1, 2, 3, 2, 4, 1, 5];

let result = [...new Set(arr)]

console.log(result)

let  result1 =arr.filter((item,index)=>{return arr.indexOf(item) ===index})

console.log(result1)
let result2 = arr.reduce((acc,cur)=>{if(!acc.includes(cur)){acc.push(cur)}
return acc},[])
console.log(result2)