let data = [
    {
    firstName: 'Ashton',
    lastName: 'Kutcher',
    age: 40
    }, {
    firstName: 'Bradley',
    lastName: 'Pitt',
    age: 54
    }, {
    firstName: 'Hannah',
    lastName: 'Dakota',
    age: 24
    }, {
    firstName: 'Hannah',
    lastName: 'Dakota',
    age: 24
    }
    ];





let someFunc = () => {

let ourTable = document.createElement('table')
ourTable.classList.add('table')
document.body.append(ourTable)

data.forEach(item=>{    
    let column = document.createElement('tr')
    ourTable.append(column)
    
    let firstName = document.createElement('td')
    firstName.innerText = item.firstName
    column.append(firstName)

    let lastName = document.createElement('td')
    lastName.innerText = item.lastName
    column.append(lastName)
    
    let age = document.createElement('td')
    age.innerText = item.age
    column.append(age)  


    })
}   
someFunc()


let deleteFunc = () => {
    let del = document.querySelector('.table')
    del.remove()
}

let addUser = document.querySelector('.add-user');  //кнопка в документе add user
let modal = document.querySelector('.modal');   //модальное окно
let closeModal = document.querySelector('.close');  //x в модальном окне
let closeModalclose = document.querySelector('.btn.close');  //close в модальном окне
let okBtn = document.querySelector('.btn.ok'); // кнопка Ок




okBtn.addEventListener('click', function(){
    let getfirstName = document.getElementById('first-name').value
    let getlastName = document.getElementById('last-name').value
    let getuserAge = document.getElementById('age').value
    let newObj = {}
    newObj.firstName = getfirstName
    newObj.lastName = getlastName
    newObj.age = getuserAge

    data.push(newObj)
    deleteFunc()
    someFunc()
    console.log(newObj)
    modal.style.display = 'none'                 //по нажатию Ок

    
}) 






    addUser.onclick = function(){
    modal.style.display = 'block';  //открытие модального окна
}

    closeModal.onclick = function(){   //закрытие модального окна
        modal.style.display = 'none';
    }
    closeModalclose.onclick = function(){
        modal.style.display = 'none';              //закрытие модального окна
    }

    


    




