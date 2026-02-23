const sentence='i am leaning web dev'
// const result= 'ved bew gninael ma i'
let reverse=''
for( const letter of sentence){
    // console.log(letter)
    reverse=letter+reverse
}
console.log(reverse)


const phrage='i am learning wev dev'
let rev= ''
for(let i=0; i<phrage.length; i++){
    console.log(i)
    const letter=sentence[i]
    rev=letter+rev
}
console.log(rev)


// const reversed=sentence.split().reverse()
// const reversed=sentence.split('').reverse()
const reversed=sentence.split('').reverse().join('')
console.log(reversed)