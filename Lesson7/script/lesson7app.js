
function outer() {
    
    let c = [];
    return function () {

        let value = Math.round((Math.random(0,1) * 100));
        c.includes(value) ? true : c.push(value);
        console.log(c);
    }
}

let rand = outer();
rand()
rand()
rand()
rand()








