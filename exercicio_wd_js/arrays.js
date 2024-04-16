/*---------------tamanho---------------*/
const sapatos = ['sapato1', 'sapato2', 'sapato3', 'sapato4'];

console.log(sapatos.length); // "4"

/*---------------recuperar elemento---------------*/
const blusas = ['blusa1', 'blusa2', 'blusa3', 'blusa4'];

console.log(blusas[1]); // "blusa2"

/*---------------push(adicionar elemento por ultimo)---------------*/
const calças = ['calça1', 'calça2', 'calça3', 'calça4'];

calças.push("calça5");

console.log(calças);

/*---------------unshift(adicionar o elemento em primeiro)--------*/
const caixaDeOculos = ['oculos1', 'oculos2', 'oculos3', 'oculos4'];

caixaDeOculos.unshift("oculos0");

console.log(caixaDeOculos);

/*---------------shift(remove o primeiro)---------------*/
const luvas = ['luva1', 'luva2', 'luva3', 'luva4'];

luvas.shift();

console.log(luvas);

/*---------------pop(remove o ultimo)---------------*/
const chapeis = ['chapeu1', 'chapeu2', 'chapeu3', 'chapeu4'];

chapeis.pop();

console.log(chapeis);