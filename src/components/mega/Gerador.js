function gerarNumeros(qtd) {
  var arr = [];
  const [max, min] = [1, 60];
  let i = 0;
  while (i < qtd) {
    let igual = false;
    var n = Math.floor(Math.random() * (max - min + 1)) + min;
    for (let j = 0; j < arr.length; j++) {
      if (n == arr[j]) {
        igual = true;
      }
    }
    if (!igual) {
      arr.push(n);
      ++i;
    }
  }

  return arr.sort(function (a, b) {
    return a - b;
  });
}

export default gerarNumeros()

// Codigo do professor
/* function gerarNumeroNaoContigo(min, max, array){
  const aleatorio = parseInt(Math.random() * (max - min +1) - min)
  return array.includes(aleatorio) ?
    gerarNumeroNaoContigo(min, max, array) :
    aleatorio
}

function gNumeros(qtde) {
  const numeros = Array(qtde)
    .fill(0)
    .reduce((nums) => {
      const novoNumero = gerarNumeroNaoContigo(1, 60, nums)
      console.log([...nums, novoNumero]) // operador spread
      return [ ...nums, novoNumero]
    }, [])
    .sort((n1, n2) => n1 - n2);
  return numeros;
} */