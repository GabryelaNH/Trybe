function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
function dez() {  
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    for (dia of decemberDaysList) {
        let numero = document.createElement('li')
        let pai = document.getElementById('days')
        numero.innerText = dia
        numero.classList = 'day'
        pai.appendChild(numero)
       
    }
}
dez() 
    console.log(document.querySelectorAll('.day')[5]);
function troca() {
    document.querySelectorAll('.day')[5].classList = 'day friday'
    document.querySelectorAll('.day')[12].classList = 'day friday'
    document.querySelectorAll('.day')[19].classList = 'day friday'
    document.querySelectorAll('.day')[26].classList = 'day holiday friday'
    document.querySelectorAll('.day')[25].classList = 'day holiday'
    document.querySelectorAll('.day')[27].classList = 'day holiday'
}
troca()
function botao() { 
        let input = document.createElement('input')
        let bot = document.createElement('button')
        let dad = document.querySelectorAll('.buttons-container')[0]
        bot.id = 'btn-holiday'
        bot.innerText = 'Feriados'
        dad.appendChild(input)
        dad.appendChild(bot)
}        
botao()
function fundo() {
    let botao = document.getElementById('btn-holiday')
    let feriados = document.querySelectorAll('holiday')
    botao.addEventListener('click', fundo)
}    

