const  animals = [
    {
        animal: 'Crocodile',
        Name: 'Dandy',
        Health: true,
        color: 'green',
        weight: 400,
        inspector: {
            name: 'Ace',
            age: 33,
        }

    },
    {
        animal: 'elephant',
        Name: 'Dambo',
        Health: "ok",
        color: 'gray',
        weight: 800,
        inspector: {
            name: 'Kris',
            age: 40,
        }
    },
    {
        animal: 'Snake',
        Name: 'Vasilisk',
        Health: true,
        color: 'brown',
        weight: 200,
        inspector: {
            name: 'Din',
            age: 20,
        }
    },

    
]



let searchAnimal = (srch) => {   //Поиск животного 
    srch = srch.toLowerCase();
    for(let i=0; i<animals.length; i++)
        if(srch === animals[i].animal.toLowerCase() || srch === animals[i].Name.toLowerCase() ){
        alert(`
           \n Животное: ${animals[i].animal} 
           \n Имя: ${animals[i].Name} 
           \n цвет: ${animals[i].color} 
           \n вес: ${animals[i].weight}
           \n надзиратель: ${animals[i].inspector.name}` );
         }
        
}



let deleteAnimal = (del) => {   //удалить животное
    del = del.toLowerCase();
    for(let i=0; i<animals.length; i++)
        if(del === animals[i].animal.toLowerCase() || del === animals[i].Name.toLowerCase()){
            let removeAnimal = animals.splice(i, 1)
            console.log(`${removeAnimal[0].Name} Выгнали`)
            
         }
        
}




let addAnimal = () => { //добивать животное

    let newanimal = prompt('Кого добавляем? Введите какое животоное')
    let newName = prompt('Кого добавляем? Введите имя')
    let newHealth = prompt('Как здоровье? ')
    let newColor = prompt('Введите цвет?')
    let newWeight = prompt('Введите вес')

   animals.push({animal: newanimal,
Name: newName,
Health: newHealth,
color: newColor,
weight: newWeight,

})
    
}