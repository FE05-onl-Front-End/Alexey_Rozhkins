//--------------------------------Task 2

var data = {
    
}
 
data.name = prompt('Имя Короля?');
data.ourLost = prompt('потери армии короля?');
data.ourArmy = prompt('сколько было воинов в армии короля?');
data.enemiesArmy = prompt('сколько врагов было?');
data.enemiesLost = prompt('сколько враги потеряли воинов?');

alert(`Король ${data.name}, мы победили вражескую армию в ${data.enemiesArmy}! Враг бежит, оставив на поле боя ${data.enemiesLost} павших воинов. Наши потери король ${data.name} составили ${data.ourLost} героически павших воинов от всей нашей армии в ${data.ourArmy} солдат! Мы победили, сохранив ${data.ourArmy - data.ourLost} воинов. И можем продолжить преследовать остатки вражеской армии в ${data.enemiesArmy - data.enemiesLost} солдат. С победой король ${data.name}!!`);
