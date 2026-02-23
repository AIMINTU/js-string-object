const school='RAJ UK uttara model school'
console.log(school)
console.log(school.toUpperCase())

const subject='Chemistry'
const book='chemistry'
if(subject.toLowerCase()===book.toLowerCase()){
    console.log('i am reading a book eibar porikkhay fatil felbo')
}
else{
    console.log('hudai samoy nostto lekha pora anek kostto')
}

// const drink='water '
// const liquid='  water'
// if(drink===liquid){
//     console.log('panir opor nam jibon')
// }
// else{
//     console.log('there is lots of water in the sea but it is not for drink')
// }
const drink='water '
const liquid='  water'
if(drink.trim()===liquid.trim()){
    console.log('panir opor nam jibon')
}
else{
    console.log('there is lots of water in the sea but it is not for drink')
}
