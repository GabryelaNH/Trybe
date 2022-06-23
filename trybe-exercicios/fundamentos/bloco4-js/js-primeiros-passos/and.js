const currentHour = 7;
let menssage = "";
if (currentHour >= 22) {
  menssage = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
  menssage = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  menssage = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour > 14) {
  menssage = "Hora do almoço!!!";
} else if (currentHour >= 4 && currentHour < 11) {
  menssage = "Hmmm, cheiro de café recém passado";
}
console.log(menssage);
