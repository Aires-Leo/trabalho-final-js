//Variaveis globais e objetos
let indiceDoador = 0
let doador = {
  nome: [],
  idade: [],
  peso: [],
  tipoSanguineo: [],
  ultimaDoacao: [],
}
//Funções
function menu() {
  var opcao = Number(
    prompt(`
===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
      1. Cadastrar doador
      2. Listar doadores
      3. Buscar doador por tipo sanguíneo
      4. Buscar doador por data da última doação
      5. Sair
      Escolha uma opção:`)
  );
  switch (opcao) {
    case 1:
      cadastrarDoador();
      break;
    case 2:
      listarDoadores();
      break;
    case 3:
      buscarTipoSangue();
      break;
    case 4:
      buscarPorData();
      break;
    case 5:
      // Sair
      break;
    default:
      alert("Opção inválida. Tente novamente.");
      menu();
  }
}

function cadastrarDoador() {
  doador.nome[indiceDoador] = prompt("Digite o seu nome: ")
  doador.idade[indiceDoador] = prompt("Digite o seu idade: ")
  doador.peso[indiceDoador] = prompt("Digite o seu peso: ")
  doador.tipoSanguineo[indiceDoador] = prompt("Digite o seu tipo sanguineo: ").toUpperCase()
  doador.ultimaDoacao[indiceDoador] = prompt("Digite a sua ultima data de doação: [dd/mm/aaaa]")
  indiceDoador++;
  menu()
}

function listarDoadores() {
  let lista = `
  ----------------------------
  LISTAGEM DE DOADORES:
  --------------------------
  NOME           | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
  ----------------------------------------------------------------------------`
  for (let i = 0; i < indiceDoador; i++) {
    lista += `${doador.nome[i].slice(0,20).padEnd(20, ' ')} | ${doador.idade[i].slice(0,3).padEnd(10, ' ')}| ${doador.peso[i].slice(0,3).padEnd(10, ' ')}| ${doador.tipoSanguineo[i].slice(0,3).padEnd(10, ' ')}| ${doador.ultimaDoacao[i].slice(0,10).padEnd(10, ' ')}\n `
  }
  prompt(lista + `
  ----------------------------------------------------------------------------`)
  menu()
}

function buscarTipoSangue() {
  const tipoSanguineo = prompt("Digite o tipoSnaguineo: ").toUpperCase()
  let lista = `
  ----------------------------
  LISTAGEM DE DOADORES:
  --------------------------
  NOME           | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
  ----------------------------------------------------------------------------
 `
  for (let i = 0; i < indiceDoador; i++) {
    if (doador.tipoSanguineo[i] === tipoSanguineo) {
        lista += `${doador.nome[i].padEnd(20, ' ')}| ${doador.idade[i].padEnd(10, ' ')}| ${doador.peso[i].padEnd(10, ' ')}| ${doador.tipoSanguineo[i].padEnd(10, ' ')}| ${doador.ultimaDoacao[i].padEnd(10, ' ')}\n `
    }
  }
  prompt(lista + `
  ----------------------------------------------------------------------------`)
  menu()
}

function buscarPorData() {
  const data = prompt("Digite a data: [dd/mm/aaaa]")
  let lista = `
  ----------------------------
  LISTAGEM DE DOADORES:
  --------------------------
  NOME           | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
  ----------------------------------------------------------------------------
 `
  for (let i = 0; i < indiceDoador; i++) {
    if (doador.ultimaDoacao[i] === data) {
        lista += `${doador.nome[i].padEnd(20, ' ')}| ${doador.idade[i].padEnd(10, ' ')}| ${doador.peso[i].padEnd(10, ' ')}| ${doador.tipoSanguineo[i].padEnd(10, ' ')}| ${doador.ultimaDoacao[i].padEnd(10, ' ')}\n `
    }
  }
  prompt(lista + `
  ----------------------------------------------------------------------------`)
  menu()
}
