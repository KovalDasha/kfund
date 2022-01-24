// let arr = ['hi', 'how are u', 'somethings', 10]
// console.log(arr)
// console.log(arr[2])


// for (let i = 0; i < 10; i++) {
//     arr[i] = i**i
// }


// let styles = ['джаз', 'блюз']
// console.log(styles)
// styles.push('рок-н-ролл')
// console.log(styles)
// styles.splice(1,1, 'классика')
// console.log(styles)
// styles.shift()
// console.log(styles)
// styles.unshift('рэп', 'регги')
// console.log(styles)


function sumInput() {
    let ii = []
    while (true) {
      let x = prompt("Введите число", 0)
      if (x === "" || x === null || !isFinite(x)) break
      ii.push(+x)
    }
    let plus = 0
    for (let i of ii) {
      plus += i
    }return plus
}alert( sumInput() )