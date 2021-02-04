

// ---------------------------------------------------------------------------------
const fillArr = (arrSize, value) => {
    let someArr = Array(arrSize).fill(value);
    return console.log(someArr)

   }

   fillArr(10, 'a')

// -------------------------------------------------------------------------------------

const compact = (array) => {
    let arr = [];
    array.forEach(element =>{
        if(typeof element === 'number' && element !== 0){
           arr.push(element)
        }
    })
    return arr
   }
   
   const data = [0, 1, false, 2, undefined, '', 3, null];
   console.log(compact(data)) // [1, 2, 3]



//---------------------------------------------

let usersAge = {
    ivanov: "19",
    petrov: "17",
    sidorov: "21",
  };

  let adult = []
  let notAnAdult = []

  
let someArr = Object.entries(usersAge)

  for (let [key, value] of someArr) {
    let someObj = {
        name: key,
        age: value,
    }
    
    if(value>=18){
        adult.push(someObj)
    }
    if(value<18){
        notAnAdult.push(someObj)
    }

  }
  console.log(adult)
  console.log(notAnAdult)