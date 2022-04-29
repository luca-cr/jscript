//Código del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");
console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");
console.log("el area de este cuadrados es: " + areaCuadrado + "cm2");

console.groupEnd();

//Código del triángulo

console.group("Triangulo");
const ladoTri1 = 6;
const ladoTri2 = 6;
const baseTri  = 4;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTri1 
    + "cm, " 
    + ladoTri2 
    + "cm, " 
    + baseTri 
    + "cm"
    );
    
const alturaTriangulo = 5.5;
const perimetroTriangulo= ladoTri1 + ladoTri2 + baseTri; 
const areaTriangulo = (baseTri * alturaTriangulo) / 2;

console.log("La altura del triángulo mide: " + alturaTriangulo + "cm");
console.log("El perimetro del triángulo mide: " + perimetroTriangulo + "cm");
console.log("El area del triángulo es de: " + areaTriangulo + "cm2");

console.groupEnd();


// Código del círculo

console.group("Círculo");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log("El radio del circulos mide: " + radioCirculo + "cm");
console.log("El diametro del circulo es de: " + diametroCirculo + "cm");
console.log("El perimetro del circulo es igual a: " + perimetroCirculo + "cm");
console.log("El area del circulo es igual a: " + areaCirculo + "cm2");

console.groupEnd();