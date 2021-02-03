const  animals = [
    {
        animal: 'Crocodile',
        animalName: 'Dandy',
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
        animalName: 'Dambo',
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
        animalName: 'Vasilisk',
        Health: true,
        color: 'brown',
        weight: 200,
        inspector: {
            name: 'Din',
            age: 20,
        }
    },

    
]



let searchAnimal = (animals, srch) => {   //Поиск животного 
    srch = srch.toLowerCase();
    for(let i=0; i<animals.length; i++)
        if(srch === animals[i].animal.toLowerCase() || srch === animals[i].animalName.toLowerCase() ){
        console.log(`
           \n Животное: ${animals[i].animal} 
           \n Имя: ${animals[i].animalName} 
           \n цвет: ${animals[i].color} 
           \n вес: ${animals[i].weight}
           \n надзиратель: ${animals[i].inspector.name}` );
         }
        
}
searchAnimal()



let deleteAnimal = (name, zoo) => {   //удалить животное
    name = name.toLowerCase();
    for(let i=0; i<zoo.length; i++)
        if(name === zoo[i].animal.toLowerCase() || name === zoo[i].animalName.toLowerCase()){
            let removeAnimal = zoo.splice(i, 1)
            console.log(`${removeAnimal[0].animalName} Выгнали`)
            
         }
        
}

deleteAnimal()



const someAnimal = {           //добавить животное
        animal: 'Dolphin',
        Name: 'winter',
        Health: true,
        color: 'white',
        weight: 200,
        inspector: {
            name: 'Din',
            age: 20,
        }

}

let addAnimal = (animal, zoo) => {    
    zoo.push(animal);


console.log(zoo);
} 
addAnimal(someAnimal, animals)