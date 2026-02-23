const mobile={
    brand:'samsung',
    price:25000,
    color:'black',
    camera: '12mp',
    isNew:true
}
// for(const key in mobile){
//     console.log(key)
// }
// for(const prop in mobile){
//     console.log(prop)
//     console.log(mobile[prop])
// }

const keys=Object.keys(mobile)
console.log(keys)
for(const key of keys){
    // console.log(key)
    // console.log(mobile[key])
    console.log(key,mobile[key])
    console.log(key, ':',mobile[key])
}

