"use strict "
var a;
var b;
var c;
var x1;
var x2;
function Bhaskara(a,b,c){
var a = ler_entrada("a");
var b = ler_entrada("b");
var c = ler_entrada("c");
var x1 = (-b + raiz_quadrada(delta(a,b,c)))/(2*a); 
var x2 = (-b - raiz_quadrada(delta(a,b,c)))/(2*a);
escrever_saida("saida", "x¹ = "+ x1 + "<br>" + "x² = " + x2);
}
function ler_entrada(campo){
  return Number(document.getElementById(campo).value);
}
function escrever_saida(campo,valor){
  document.getElementById(campo).innerHTML= valor;
}
function raiz_quadrada(x) {
  return Math.sqrt(x);
}
function quadrado(x){
return Math.pow(x,2);
}
function delta(a,b,c){
  return quadrado(b)+((-4*a)*c); 
  console.log(delta)
}
