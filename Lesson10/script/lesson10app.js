let createMoveCircle = () => {

let circle = document.createElement('div')
document.body.append(circle)
circle.classList.add('circle')

    circle.addEventListener('click', function(){
        document.addEventListener('mousemove', function(event){
            
            let mouseX = event.pageX 
            let mouseY = event.pageY
            circle.style.position = 'absolute'
            circle.style.top =  mouseY + 'px'
            circle.style.left = mouseX + 'px'
       
            
            
            })
    })
    

}



let tab = document.querySelectorAll('.tab')
let tabContent = document.querySelectorAll('.content__text')
let tabClose = document.querySelectorAll('.tab__close')

tab.forEach(element => {
    element.addEventListener('click', ()=>{
       let tabId = element.getAttribute('data-tab')
       let currentTab = document.querySelector(tabId)
        tab.forEach(element =>{
            element.classList.remove('show')
        })
        tabContent.forEach(element =>{
            element.classList.remove('show')
        })
        element.classList.add('show')
        currentTab.classList.add('show')
        
        tabClose.forEach(closeBtn=>{
            closeBtn.addEventListener('click', function(){


   
            })
        })
  
        
    })
});












