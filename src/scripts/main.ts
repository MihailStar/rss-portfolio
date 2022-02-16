import '../components/header/header';
import '../components/portfolio/portfolio';
import '../components/contacts/contacts';
import './translate/translate';

type Title = string;
type MyPoints = number;
type MaxPoints = number;
type Сriterion = [Title, MyPoints, MaxPoints];
type Criterions = {
  title: Title;
  criterions: Сriterion[];
  maxPoints: MaxPoints;
};

const firstPartСriterions: Criterions = {
  title: 'Портфолио#1',
  criterions: [
    ['Верстка валидная', 10, 10],
    ['Верстка семантическая', 20, 20],
    ['Верстка соответствует макету', 48, 48],
    ['Требования к CSS', 12, 12],
    ['Интерактивность, реализуемая через CSS', 20, 20],
  ],
  maxPoints: 100,
};

const secondPartСriterions: Criterions = {
  title: 'Портфолио#2',
  criterions: [
    ['Верстка соответствует макету. Ширина экрана 768px', 48, 48],
    [
      'Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки',
      15,
      15,
    ],
    ['На ширине экрана 768рх и меньше реализовано адаптивное меню', 22, 22],
  ],
  maxPoints: 75,
};

const thirdPartСriterions: Criterions = {
  title: 'Портфолио#3',
  criterions: [
    ['Смена изображений в секции portfolio', 25, 25],
    ['Перевод страницы на два языка', 25, 25],
    ['Переключение светлой и темной темы', 25, 25],
    ['Дополнительный функционал', 5, 10],
  ],
  maxPoints: 75,
};

function printScore(criterions: Criterions): void {
  console.log(criterions.title);

  criterions.criterions.forEach(([title, myPoints, maxPoints], index) => {
    if (myPoints > maxPoints) {
      throw new RangeError(`criterion[${index}][1] > criterion[${index}][2]`);
    }

    console.log(`${title}: ${myPoints}/${maxPoints}`);
  });

  const points = criterions.criterions.reduce(
    (acc, [, myPoints]) => acc + myPoints,
    0
  );

  console.log(`Итого: ${points}/${criterions.maxPoints}`);
}

printScore(firstPartСriterions);
console.log('\n');
printScore(secondPartСriterions);
console.log('\n');
printScore(thirdPartСriterions);
