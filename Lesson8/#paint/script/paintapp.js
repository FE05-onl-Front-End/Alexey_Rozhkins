let menu = document.querySelector('.figure__menu');
let menuList = document.querySelector('.menu__inner');

menu.addEventListener('click', function(){
    
   if ( menuList.style.display === 'flex') {

            menuList.style.display = 'none';
   } else {
       menuList.style.display = 'flex'
   }
  

})


//--------------------------------------triangle

let menuTriangle = document.querySelector('.inner__triangle')
let areaTriangle = document.querySelector('.area__triangle')
let svgTriangle = document.querySelector('.svg__triangle')
menuTriangle.addEventListener('click', function(){

    svgTriangle.style.display = 'block'
    menuList.style.display = 'none'
    svgCircle.style.display = 'none'
    svgSquare.style.display = 'none'
    areaTriangle.style.fill = '#fff'

})

//---------------------------------------circle

let menuCircle = document.querySelector('.inner__circle')
let areaCircle = document.querySelector('.area__circle')
let svgCircle = document.querySelector('.svg__circle')

menuCircle.addEventListener('click', function(){
    svgCircle.style.display = 'block'
    menuList.style.display = 'none'
    svgTriangle.style.display = 'none'
    svgSquare.style.display = 'none'
    areaCircle.style.fill = '#fff'
})

//---------------------------------------square
let menuSquare = document.querySelector('.inner__square')
let areaSquare = document.querySelector('.area__square')
let svgSquare = document.querySelector('.svg__square')
menuSquare.addEventListener('click', function(){
    svgSquare.style.display = 'block'
    menuList.style.display = 'none'
    svgTriangle.style.display = 'none'
    svgCircle.style.display = 'none'
    areaSquare.style.fill = '#fff'
})


//----------------------clear
let svgAlign = document.querySelectorAll('.svg__align')
let clearAreaFunc = () =>{
    let clear = document.querySelector('.clear')
    clear.addEventListener('click', function(){
        svgAlign.forEach(item=>{
            item.style.display = 'none'
        })
        
    })
  
}
clearAreaFunc()



//color-----------------------------------------------------
let colorYellow = document.querySelector('.yellow')
let colorRed = document.querySelector('.red')
let colorBlue = document.querySelector('.blue')
let colorBlack = document.querySelector('.black')
let colorPink = document.querySelector('.pink')
let colorGreen = document.querySelector('.green')
let colorReset = document.querySelector('.reset')
let areaFigureColor = document.querySelectorAll('.area__color__figure')


colorYellow.addEventListener('click', function(){
    areaFigureColor.forEach(item =>{
        item.style.fill = '#ffff89';
    })
})


colorRed.addEventListener('click', function(){
    areaFigureColor.forEach(item =>{
        item.style.fill = '#fd7575';
    })
})

colorBlue.addEventListener('click', function(){
    areaFigureColor.forEach(item =>{
        item.style.fill = '#77dbfc';
    })
})
colorBlack.addEventListener('click', function(){
    areaFigureColor.forEach(item =>{
        item.style.fill = '#000';
    })
})
colorPink.addEventListener('click', function(){
    areaFigureColor.forEach(item =>{
        item.style.fill = '#ff86ff';
    })
})
colorGreen.addEventListener('click', function(){
    areaFigureColor.forEach(item =>{
        item.style.fill = '#78fc78';
    })
})
colorReset.addEventListener('click', function(){
    areaFigureColor.forEach(item =>{
        item.style.fill = '#fff';
    })
})
