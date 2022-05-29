//Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado*4;
console.log(`El perimetro del cuadrado es ${perimetroCuadrado} cms`);

const areaCuadrado=ladoCuadrado*ladoCuadrado;
console.log(`El area del cuadrado es de ${areaCuadrado} cms2`);

console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
const areaTriangulo = baseTriangulo*alturaTriangulo/2;

console.log(`Los lados del triangulo miden ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y ${baseTriangulo} cm`);
console.log(`El area del triangulo es ${areaTriangulo} cm2 y su perimetro es de ${perimetroTriangulo} cm`);

console.groupEnd();

//Codigo del circulo
console.group("Circulos");

const radioCirculo = 4;
const diametroRadio = radioCirculo * 2;
const pi = Math.PI;

const perimetroCirculo = diametroRadio * pi;
const areaCirculo = pi*radioCirculo*radioCirculo;

console.log(`El area del circulo es ${areaCirculo} cm2 y su perimetro es de ${perimetroCirculo} cm`);

console.groupEnd();