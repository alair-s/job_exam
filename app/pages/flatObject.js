

const obj = {
    user: {
        name: "Alice",
        address: {
            city: "Beijing",
            zip: 100000
        }
    },
    tags: ["dev", "frontend"]
};

function flatObj(obj,prefix='',res={}){
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj, key)){
            const value = obj[key];
            const newkey = prefix?`${prefix}.${key}`:key;
            if(Array.isArray(value)){
                value.forEach((item,index)=>{
                    if(typeof item === 'object' && item !==null){
                        flatObj(item,`${newkey}[${index}]`,res)
                    }else{
                        res[`${newkey}[${index}]`]=item
                    }
                })
            }else if(typeof value === 'object'&&value!==null){
                flatObj(value,newkey,res);
            }else{
                res[newkey]=value;
            }


        }
    }
    return res;
}
console.log(flatObj(obj,'',{}))