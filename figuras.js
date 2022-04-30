//Código del cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}


function areaCuadrado(lado){
    return lado * lado;
} 

// console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");
// console.log("el area de este cuadrados es: " + areaCuadrado + "cm2");
console.groupEnd();

//Código del triángulo

console.group("Triangulo");
// const ladoTri1 = 6;
// const ladoTri2 = 6;
// const baseTri  = 4;

// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTri1 
//     + "cm, " 
//     + ladoTri2 
//     + "cm, " 
//     + baseTri 
//     + "cm"
//     );
    
// const alturaTriangulo = 5.5;
// const perimetroTriangulo= ladoTri1 + ladoTri2 + baseTri; 
// const areaTriangulo = (baseTri * alturaTriangulo) / 2;

// console.log("La altura del triángulo mide: " + alturaTriangulo + "cm");

// console.log("El perimetro del triángulo mide: " + perimetroTriangulo + "cm");
// console.log("El area del triángulo es de: " + areaTriangulo + "cm2");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();


// Código del círculo

console.group("Círculo");

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
// const perimetroCirculo = diametroCirculo * PI;
// const areaCirculo = (radioCirculo * radioCirculo) * PI;

// console.log("El radio del circulos mide: " + radioCirculo + "cm");
// console.log("El diametro del circulo es de: " + diametroCirculo + "cm");
// console.log("El perimetro del circulo es igual a: " + perimetroCirculo + "cm");
// console.log("El area del circulo es igual a: " + areaCirculo + "cm2");

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) + PI;
}
console.groupEnd();

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;
    
    const perimetro = perimetroCuadrado(valor);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;

    const area = areaCuadrado(valor);
    alert(area);
}

function diametroCirculo1(){
    const input = document.getElementById("InputCirculo");
    const valor = input.value;

    const diametro = diametroCirculo(valor);
    alert(diametro);
}

function areaCirculo1(){
    const input = document.getElementById("InputCirculo");
    const valor = input.value;
    const area = areaCirculo(valor);
    alert(area);
}

function perimetroTriangulo1(){
    const input1 = document.getElementById("InputTriangulo1");
    const valor1 = parseInt(input1.value);

    const input2 = document.getElementById("InputTriangulo2");
    const valor2 = parseInt(input2.value);


    const basetriangulo = document.getElementById("Base");
    const base = parseInt(basetriangulo.value);

    const perimetro = perimetroTriangulo(valor1, valor2, base);
    alert(perimetro);
}

function areaTriangulo1(){
    const input = document.getElementById("altura");
    const valor1 = input.value;

    const input1 = document.getElementById("Base");
    const valor2 = input1.value;

    const resultado = areaTriangulo(valor1, valor2);
    alert(resultado);
}




