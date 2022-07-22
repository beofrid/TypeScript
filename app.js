var button = document.getElementById("button");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
function adicionarNumero(n1, n2) {
    return n1 + n2;
}
if (button) {
    button.addEventListener('click', function () {
        alert("pelo menos isso");
        console.log(adicionarNumero(Number(input1.value), Number(input2.value)));
    });
}
