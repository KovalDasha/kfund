// let x = prompt('Privet')

// if (x > 0){
//     console.log(2 * Math.sin(x))
// }else{
//     console.log(6-x)      
// }

// if (x < -2 || x > 2){
//     console.log(2*x)
// }else{
//     console.log(-3 * x)
// }

// if (x <= 0){
//     console.log(-x)
// }else if (x>0 && x<2){
//     console.log(x**2)
// }else{
//     console.log(4)
// }


// let size = prompt()



// let h = document.querySelector('.h12')
// if (size*2 == size*2 && size<100 && size>10){
//     function changeColor(){
//         let size = prompt()
//         console.log(size)
//         h1.style.fontSize = size + 'px'
//     }
// }else{
//     console.log('NaN')
// }

let h = document.querySelector('.h12')
function changeColor(){
    let size = prompt()
    if (size*2 == size*2 && size<100 && size>10){
        console.log(size)
        h.style.fontSize = size + 'px'
    }else{
        console.log('NaN')
    }
}