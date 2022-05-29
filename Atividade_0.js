const prompt= require ("prompt-sync")();

console.clear();
console.log('Jogo do Detetive')

let name = prompt('Qual o seu nome?')
let introduction = ('Olá,'+name, ',seja bem vindo(a), você estará participando do jogo do detetive, será feito um interrogatório, o qual contém 5 (cinco) questões, sendo as respostas possiveis SIM ou NÂO, para cada uma delas, e a depender das respostas será definido se você é INOCENTE, SUSPEITO(A) OU CULPADO(A), podemos dar andamento?');


let history = ('Boa noite,',+name,' eu sou o detetive Steve, e farei o seu interrogatório,',+name, 'como você sabe, hoje houve um possivel homicídio em seu prédio, e farei cinco questionamentos a você, por favor, peço que não se estenda sobre as questões e apenas responda com SIM ou NÂO, iniciando:');
console.log(introduction);

let next = prompt('(Press Enter)')
console.log();
console.log(history);
let next1 = prompt('Press Enter para iniciar')
console.log();

const quest1 = prompt ('Você conhecia a vitima?');
const quest2 = prompt ('Você cometeu o crime? ');
const quest3 = prompt ('Você percebeu algo de estranho?');
const quest4 = prompt ('Você ouviu algum som?');
const quest5 = prompt ('Você viu alguem estranho?');

/*Utilizado o match para identificação da palavra sim extraída
do prompt, bem como utilizado o toLowerCase, para transformar a resposta
captada no prompt em letras minúsculas*/


const yes = (quest1.toLowerCase().match (/sim/g) || []).length;
const yes2 = (quest2.toLowerCase().match (/sim/g) || []).length;
const yes3 = (quest3.toLowerCase().match (/sim/g) || []).length;
const yes4 = (quest4.toLowerCase().match (/sim/g) || []).length;
const yes5 = (quest5.toLowerCase().match (/sim/g) || []).length;


plus = yes + yes2 + yes3 + yes4 + yes5;
console.log(plus)

if (plus >= 4){
  console.log( name,', você é CULPADO(A), e tem o direito de ficar em silêncio e também a um Advogado')
} else if (plus === 3){
  console.log(name,', você é SUSPEITO(A), e será levado sob custódia, para mais investigações, você tem o direito a um advogado')
} else {
  console.log(name,', você é INOCENTE, fique tranquila, esta foi apenas um investigação de rotina')
}