const person={
    name:'Jakaria Mintu',
    age:21,
    profession:'unemployee',
    salary:2500,
    married:true,
    'fav places':['bandorban','saint martin','kuakata']
}
person.salary=30000;
person['age']=26;
person['fav places']=['maldives','malta','bali','pataya']
console.log(person)
const keyname='profession'
console.log(person[keyname])
const propName='profession'
person[propName]='devops'
console.log(person['profession'])