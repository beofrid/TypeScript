let button = document.getElementById("button") 
let input1 = document.getElementById("input1") as HTMLInputElement;
let input2 = document.getElementById("input2") as HTMLInputElement;

function adicionarNumero(n1:number, n2:number){
    return n1+n2;
}

if (button){
    button.addEventListener('click', () =>  {
        alert("pelo menos isso")
        console.log(adicionarNumero(Number(input1.value), Number(input2.value)))
    })

}

const animal = {
    especie: 'pomba',
    cor: 'branca',
    idade: 1

}

const pomba: {nome: String, peso: Number} = {
    nome: "gira",
    peso: 2 
}