let buttonjs = document.getElementById("button")
let input1js = document.getElementById("input1")
let input2ts = document.getElementById("input2")
console.log(input1, input2*1)
button.addEventListener('click', () => {
    function mult(a,b){
        return a*b;
    }
    
    console.log(mult(input1.value, input2.value))
}) 