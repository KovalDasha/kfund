// let price = 10
// for(let i = 1; i <=10; i++){
//     console.log(i * price)
// }

// let price = 10
// for(let i = 1; i <=10; i += 0.2){
//     console.log(i * price)
// }

// let n = 5
// let result = 0
// for(let i = 0; i <= n; i++){
//     result += (n+i)**2
//     console.log((n+i)**2)
    
// }
// console.log(result)
//




//dz

//25

let x = prompt() 
let y=3*x*x*x*x*x*x-6*x*x-7
console.log(y)                                                                

//26

let x = prompt('Введите число') 
let y=4*(x-3)*(x-3)*(x-3)*(x-3)*(x-3)*(x-3)-7*(x-3)*(x-3)*(x-3)+2
console.log(y)                                                       

//33

let x=prompt('кг 1')
let y=prompt('кг 2')   
let a=prompt('стоимость')
let n=a/x
let l=a/y
console.log(n)
console.log(l)                                                         

//19

let N=prompt('секунды')
N = Math.round(N);
let t=N/60
t = Math.round(t);
console.log(t)         

//13 

let F
let A=prompt("А")       
let B=prompt("B")
let C=prompt("C") 
if (A>0 && B>0 && C>0 ){
 F=true;
}else{
   F=false
}
console.log(F)     

//14

let F
let A=prompt("А")       
let B=prompt("B")
let C=prompt("C") 
if (A>0 && B<0 && C<0){
 F=true;
}else if(A<0 && B>0 && C<0){
   F=true
}else if(A<0 && B<0 && C>0){
   F=true
}else{
   F=false
}
console.log(F)     