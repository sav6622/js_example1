let username = "my name";
let bonusBalance = 1000;

console.log(`Пользователь: ${username}`);
console.log(`Баланс: ${bonusBalance}`);

const bonusBuysNew = 50;      //Количество бонусов за покупку
const bonusDropsEveryDay = 3; //Количество бонусов списывается каждый день

const days = 7;               //Количество дней для расчета баланса
const daysBetweenBuys = 2;    //Каждые n дней покупка
  
for (let i = 0; i < days; i++)  {
  if (i % daysBetweenBuys) 
    bonusBalance += bonusBuysNew;      //Бонусы за покупку
  
  bonusBalance -= bonusDropsEveryDay;  //Списание
}

console.log(`Баланс на ${days} день: ${bonusBalance}`);

