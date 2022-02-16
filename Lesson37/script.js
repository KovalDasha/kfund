// let arr = []
// let add = () =>{
//     let a = prompt('Введите что-то:')
//     if (a === null) {
//         console.log('Попробуйте еще раз')
//         return
//     }
//     arr.push(a)
// }

// let output = () => {
//     console.log(arr)
// }

// addBtn.addEventListener('click', console1)



// let addBtn = document.querySelector('.button')

// addBtn.addEventListener('click', () => consol())

// let consol = () =>{
//     console.log(1)
// }



let inputBtn = document.querySelector('.input_btn')
let arr = []
let inputText = document.querySelector('.input_text')
// inputBtn.addEventListener('click', () => add())
inputText.addEventListener('change', () => add())

let add = () => {
    
    let text = inputText.value

    if(text = '') return

    arr.pusf(text)
    console.log(arr)

    inputText.value = ''
}


let addModal = () =>{

    let body = document.querySelector('body')
    body.insertAdjacentHTML('afterbegin', `
        <div class="modal">
            <input type="text" class="modal_input_text">
            <div class="input_ok">Добавить</div>
        </div>
    `)
    document.querySelector('.input_ok').addEventListener('click', () => add())
}
let addText = () => {
    let text = document.querySelector('.modal_input_text').value

    if (text == '') return
    arr.push(text)
    console.log(arr)

    document.querySelector('.modal').remove()
}