const TABELA = document.querySelector('#sensores tbody');

async function carregarSensores() {
  const resposta = await fetch('dados/sensores.json');
  const sensores = await resposta.json();

  sensores.forEach(desenharLinha);
  sensores.forEach(verificarAlerta);
}

function converterTemperatura(leitura) {
  return leitura * 9 / 5 + 32;
}

function desenharLinha(sensor) {
  const celsius = converterTemperatura(sensor.valor).toFixed(1);
  const tr = document.createElement('tr');

  tr.innerHTML =
    '<td>' + sensor.codigo + '</td>' +
    '<td>' + sensor.descricao + '</td>' +
    '<td>' + celsius + ' C</td>' +
    '<td>ok</td>';

  TABELA.appendChild(tr);
}

function marcarAtualizacao() {
  document.querySelector('#atualizado').textContent =
    new Date().toLocaleString('pt-BR');
}

function verificarAlerta(sensor) {
  const limites = {
    'S-101': 80,
    'S-102': 80,
    'S-103': 80,
    'S-104': 45,
    'S-210': 75
  };

  if (sensor.valor > limites[sensor.codigo]) {
    const item = document.createElement('li');
    item.textContent =
      'ALERTA: ' + sensor.descricao + ' - Valor: ' + sensor.valor + ' ' + sensor.unidade;

    document.querySelector('#lista-alertas').appendChild(item);
  }
}

carregarSensores();
marcarAtualizacao();