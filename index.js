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
    bonusBalance += bonusBuysNew;      //Начисляем бонусы за покупку

  //Проведём ежедневное списание бонусов
  if (bonusBalance >= bonusDropsEveryDay)
    bonusBalance -= bonusDropsEveryDay;  
  else
    bonusBalance = 0;    //Обнуляем баланс бонусов если их меньше каждодневного списания
}

console.log(`Баланс на ${days} день: ${bonusBalance}`);

