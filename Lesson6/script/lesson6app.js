// ----------------------------------------------------------------------
const newData = [1, 2, 1, 2, 3];

const unique = (array) => {
    newArray = array.filter((item, index) => {
        return array.indexOf(item) == index;
       
    })
}

unique(newData)
console.log(newArray)


// ------------------------------------------------------------------------
const isEqual = (firstArray, secondArray) => {
       if(firstArray.join() == secondArray.join()){
           return true
       } else {
           return false
       }

  }
  
  const arr1 = [1, 2, 3, 4];
  const arr2 = [1, 2, 3, 4];
  const arr3 = [1, 2, 3, 5];
  const arr4 = [1, 2, 3, 4, 5];

  console.log(isEqual(arr1, arr2)); // true
  console.log(isEqual(arr1, arr3)); // false
  console.log(isEqual(arr1, arr4)); // false



// --------------------------------------------------------------------------
let secData = [1,2,3];
let newArr = [];
let value = 0;

const reverse = (array) => {
       for (i=array.length-1; i>=0; i--){

        value = array.pop()
        newArr.push(value)
        secData = newArr
    
       }
}

reverse(secData)
console.log(secData)