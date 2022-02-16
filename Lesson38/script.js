// let inputBtn = document.querySelector('.input_btn')
// let wrapper = document.querySelector('.wrapper')
// let x

// inputBtn.addEventListener('click', add)
// function add(){
//     let inputText = document.querySelector('.input_text').value
//     let inputText2 = document.querySelector('.input_text2').value
//     if(inputText < inputText2){
//         for(let i = inputText; i != (Number(inputText2) +Number(1)); i++){
//         console.log(i )
//         wrapper.insertAdjacentHTML('beforeend', i+ ' ')
//         }
//     }else{
//         for(let i = inputText2; i != (Number(inputText) +Number(1)); i++){
//             console.log(i )
            
//             wrapper.insertAdjacentHTML('afterbegin', i+ ' ')
//         }
//     }
// }

// --------------------------


let wrapper = document.querySelector('.wrapper')
let btn = document.querySelector('.button')
let btnDown = document.querySelector('.down')
let btnUp = document.querySelector('.up')

btn.addEventListener('click', () => create())
btnDown.addEventListener('click', () => down())
btnUp.addEventListener('click', () => up())
let size;
let r = 0, t = 0

let create = () => {
    size = document.querySelector('.input_text').value
    if(size<50 || size>500) return
    
    let block = document.createElement('div')
    block.classList.add('block')
    block.style.width = size+'px'
    block.style.height = size+'px'

    wrapper.append(block)   //or // wrapper.insertAdjacentElement('afterbegin', block)
    
}

let down = () => {
    let block = document.querySelector('.block');
    if((+size + t)+10 > 500) return
    t += 10;
    block.style.marginTop = t + 'px';
}
// let up = () => {
//     // let block = document.querySelector('.block');
//     if((+size + t)+10 > 500) return                            !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     t -= 10;
//     block.style.marginBottom = t + 'px';
// }