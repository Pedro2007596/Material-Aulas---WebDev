function executarPush() {
  const array = ['🍎', '🍌'];
  array.push('🍇')
  const resultado = array;
  document.getElementById('resultado-push').textContent = resultado;
}

function executarPop() {
  const array = ['🍎', '🍌', '🍇'];
  array.pop('🍌')
  const resultado = array;
  document.getElementById('resultado-pop').textContent = resultado;
}

function executarShift() {
  const array = ['🍎', '🍌', '🍇'];
  array.shift('🍎')
  const resultado = array;
  document.getElementById('resultado-shift').textContent = resultado;
}

function executarUnshift() {
  const array = ['🍌', '🍇'];
  array.unshift('🍓')
  const resultado = array;
  document.getElementById('resultado-unshift').textContent = resultado;
}

function executarIncludes() {
  const array =  ['🍎', '🍌', '🍇'];
  temKwi =array.includes('🥝')
  const resultado = temKwi;
  document.getElementById('resultado-includes').textContent = resultado;
}

function executarReverse() {
  const array = ['🍎', '🍌', '🍇'];
  array.reverse()
  const resultado = array;
  document.getElementById('resultado-reverse').textContent = resultado;
}

function executarSort() {
  const array = [3, 1, 4, 2];
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];
  array.sort()
  array2.sort()
  const resultado = array;
  document.getElementById('resultado-sort').textContent = resultado;
  const resultado2 = array2;
  document.getElementById('resultado-sort2').textContent = resultado2;
}

function executarSlice() {
  const array = ['🍎', '🍌', '🍇', '🍓'];
  corta = array.slice(1,3)
  const resultado = corta;
  document.getElementById('resultado-slice').textContent = resultado;
}

function executarSplice() {
  const array = ['🍎', '🍌', '🍇'];
  array.splice(2,1)
  const resultado = array;
  document.getElementById('resultado-splice').textContent = resultado;
}


function executarIndexOf() {
  const array = ['🍎', '🍌', '🍇'];
  num = array.indexOf('🍇')
  const resultado = num;
  document.getElementById('resultado-indexof').textContent = resultado;
}

function executarJoin() {
  const array = ['🍎', '🍌', '🍇'];
  junta = array.join('-')
  const resultado = junta;
  document.getElementById('resultado-join').textContent = resultado;
}

/* Loops de array */

function executarForEach() {
  const array = ['🍎', '🍌', '🍇'];
  loop = array.forEach((pegarItem, index) =>
  console.log(`O item ${index+1} é ${pegarItem}`));
  const resultado = loop;
  document.getElementById('resultado-foreach').textContent = resultado;
}

function executarMap() {
  const array = ['🍎', '🍌', '🍇'];
  mapear = array.map((pegarItem => `✅${pegarItem}`));
  const resultado = mapear;
  document.getElementById('resultado-map').textContent = resultado;
}

 function executarMapHTML() {
    const dispositivos = ['🎮', '🕹️', '💻'];
    const resultado = dispositivos.map((pegarItem) => {`
      <h1>Item em promoção</h1>
      <p>${pegarItem}</p>
      `});;
    document.getElementById('resultado-map-html').innerHTML = resultado.join('<br>');
  }

function executarFilter() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.filter((pegarItem)=> pegarItem === "🍎")
  document.getElementById('resultado-filter').textContent = resultado;
}

function executarFind() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.find((pegarItem)=> pegarItem === "🍇");
  document.getElementById('resultado-find').textContent = resultado;
}

function executarFindIndex() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.findIndex((pegarItem)=> pegarItem === "🍇");
  document.getElementById('resultado-findIndex').textContent = resultado;
}

function executarReduce() {
  const array = [1, 2, 3, 4];
  const resultado = array.reduce((total, valorAtual)=>{
    return total + valorAtual
  });
  document.getElementById('resultado-reduce').textContent = resultado;
}

function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = 'Resultado da operação every';
  document.getElementById('resultado-every').textContent = resultado;
}

function executarSome() {
  const array = ['🍎', '🍌', '🥝'];
  const resultado = 'Resultado da operação some';
  document.getElementById('resultado-some').textContent = resultado;
}

/* Encadeamento */

function executarEncadeamento() {
  const jogos = ['Zelda', 'Mario', 'Elden Ring', 'Fortnite', 'Minecraft'];
  const resultado = 'Resultado da operação encadeada';
  document.getElementById("resultado-encadeamento").textContent = resultado.join(', ') || 'Nenhum jogo encontrado';
}


