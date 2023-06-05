import React from "react";
import MyModal from "./_UI/MyModal";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  setNickname,
  setPassword,
  signIn,
} from "../redux/slices/authSlice";
import axios from "axios";

const AuthModal = ({ users }) => {
  const dispatch = useDispatch();
  const { nickname, password } = useSelector(state => state.auth);

  const handleNickname = e => {
    dispatch(setNickname(e.target.value));
  };
  const handlePassword = e => {
    dispatch(setPassword(e.target.value));
  };

  const onSignIn = () => {
    if (nickname.length >= 3 && password.length >= 3) {
      if (
        users.find(user => user.nickname.includes(nickname)) &&
        users.find(user => user.password.includes(password))
      ) {
        dispatch(signIn(true));
        dispatch(closeModal(false));
      } else {
        dispatch(signIn(true));
        dispatch(closeModal(false));
        axios.post("https://6466360f9c09d77a62006f18.mockapi.io/users", {
          id: users.length + 1,
          nickname,
          password,
          katas: [
            {
              id: 1,
              title: "Простейшие арифметические операции",
              body: 'Написать функцию arithmetic, принимающую 3 аргумента: первые 2 - числа, третий - операция, которая должна быть произведена над ними. Если третий аргумент +, сложить их; если —, то вычесть; * — умножить; / — разделить (первое на второе). В остальных случаях вернуть строку "Неизвестная операция".',
              data: "https://qwertycamedy.ru/sites/it-quiz/arifm/arifmOp.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/arifm/arifmOpAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 2,
              title: "Високосный год ",
              body: "Написать функцию is_year_leap, принимающую 1 аргумент — год, и возвращающую True, если год високосный, и False иначе.",
              data: "https://qwertycamedy.ru/sites/it-quiz/isYearLeap/isYearLeap.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/isYearLeap/isYearLeapAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 3,
              title: "Периметр",
              body: "Написать функцию perimeter, принимающую 2 аргумента — ширину и длину прямоугольника, и возвращающую периметр.",
              data: "https://qwertycamedy.ru/sites/it-quiz/perimeter/perimeter.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/perimeter/perimeterAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 4,
              title: "Площадь",
              body: "Написать функцию square, принимающую 2 аргумента — ширину и длину прямоугольника, и возвращающую площадь.",
              data: "https://qwertycamedy.ru/sites/it-quiz/square/square.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/square/squareAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 5,
              title: "Времена года",
              body: "Написать функцию season, принимающую 1 аргумент — номер месяца (от 1 до 12), и возвращающую время года, которому этот месяц принадлежит (зима, весна, лето или осень).",
              data: "https://qwertycamedy.ru/sites/it-quiz/season/season.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/season/seasonAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 6,
              title: "Банковский вклад ",
              body: "Пользователь делает вклад в размере a рублей сроком на years лет под 10% годовых (каждый год размер его вклада увеличивается на 10%. Эти деньги прибавляются к сумме вклада, и на них в следующем году тоже будут проценты). Написать функцию bank, принимающая аргументы a и years, и возвращающую сумму, которая будет на счету пользователя.",
              data: "https://qwertycamedy.ru/sites/it-quiz/bank/bank.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/bank/bankAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 7,
              title: "Простые числа ",
              body: "Написать функцию is_prime, принимающую 1 аргумент — число от 0 до 1000, и возвращающую True, если оно простое, и False - иначе.",
              data: "https://qwertycamedy.ru/sites/it-quiz/isPrime/isPrime.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/isPrime/isPrimeAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 8,
              title: "Найдите числа, которые делятся на заданное число",
              body: "Напишите функцию divisibleBy, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель. Первый аргумент — это массив чисел, а второй - делитель",
              data: "https://qwertycamedy.ru/sites/it-quiz/divisibleBy/divisibleBy.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/divisibleBy/divisibleByAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 9,
              title: "В два раза старше",
              body: "Ваша функция принимает два аргумента: • текущий возраст отца (лет) • текущий возраст сына (лет) Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).",
              data: "https://qwertycamedy.ru/sites/it-quiz/twiceAsOld/twiceAsOld.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/twiceAsOld/twiceAsOldAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 10,
              title: "Посчитать нечетные числа ниже n",
              body: "Если задано число n, вернуть количество положительных нечетных чисел меньше n",
              data: "https://qwertycamedy.ru/sites/it-quiz/oddCount/oddCount.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/oddCount/oddCountAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 11,
              title: "Золото племени АББА",
              body: "Главный вождь племени Абба не умеет считать. В обмен на одну из его земель вождь другого племени предложил ему выбрать одну из трех куч с золотыми монетами. Но вождю племени Абба хочется получить наибольшее количество золотых монет. Помогите вождю сделать правильный выбор!",
              data: "https://qwertycamedy.ru/sites/it-quiz/abba/abba.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/abba/abbaAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 12,
              title: "Дороги",
              body: "В галактике «Milky Way» на планете «Snowflake» есть N городов, некоторые из которых соединены дорогами. Император галактики «Milky Way» решил провести инвентаризацию дорог на планете «Snowflake». Но, как оказалось, он не силен в математике, поэтому он просит вас сосчитать количество дорог. Требуется написать программу, помогающую императору сосчитать количество дорог на планете «Snowflake».",
              data: "https://qwertycamedy.ru/sites/it-quiz/road/road.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/road/roadAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 13,
              title: "Волосатый бизнес",
              body: "Одного неформала выгнали с работы, и теперь ему надо как-то зарабатывать себе на жизнь. Поразмыслив, он решил, что сможет иметь очень неплохие деньги на продаже собственных волос. Известно, что пункты приема покупают волосы произвольной длины стоимостью С у.е. за каждый сантиметр. Так как волосяной рынок является очень динамичным, то цена одного сантиметра волос меняется каждый день как и курс валют. Неформал является очень хорошим бизнес-аналитиком. Он смог вычислить, какой будет цена одного сантиметра волос в каждый из ближайших N дней (для удобства пронумеруем дни в хронологическом порядке от 0 до N-1). Теперь он хочет определить, в какие из этих дней ему следует продавать волосы, чтобы по истечению всех N дней заработать максимальное количество денег. Заметим, что волосы у неформала растут только ночью и вырастают на 1 сантиметр за ночь. Следует также учесть, что до 0-го дня неформал с горя подстригся наголо и к 0-му дню длина его волос составляла 1 сантиметр.",
              data: "https://qwertycamedy.ru/sites/it-quiz/hair/hair.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/hair/hairAnswers.txt",
            },
            {
              id: 14,
              title: "Лесенка",
              body: "Лесенкой называется набор кубиков, в котором каждый более верхний слой содержит кубиков меньше, чем предыдущий. Требуется написать программу, вычисляющую число лесенок, которое можно построить из N кубиков.",
              data: "https://qwertycamedy.ru/sites/it-quiz/ladder/ladder.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/ladder/ladderAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 15,
              title: "Вырубка деревьев",
              body: "Король Флатландии решил вырубить некоторые деревья, растущие перед его дворцом. Деревья перед дворцом короля посажены в ряд, всего там растет n деревьев, расстояния между соседними деревьями одинаковы.\nПосле вырубки перед дворцом должно остаться m деревьев, и расстояния между соседними деревьями должны быть одинаковыми. Помогите королю выяснить, сколько существует способов вырубки деревьев.\nТребуется написать программу, которая по заданным числам n и m определит, сколько существует способов вырубки некоторых из n деревьев так, чтобы после вырубки осталось m деревьев и соседние деревья находились на равном расстоянии друг от друга.",
              data: "https://qwertycamedy.ru/sites/it-quiz/tree/tree.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/tree/treeAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 16,
              title: "Неподвижные точки",
              body: "Перестановкой P[1..n] размера n называется набор чисел от 1 до n, расположенных в определенном порядке. При этом в нем должно присутствовать ровно один раз каждое из этих чисел. Примером перестановок являются 1,3,4,5,2 (для n=5) и 3,2,1 (для n=3), а, например, 1,2,3,4,5,1 перестановкой не является, так как число 1 встречается два раза.\n\nЧисло i называется неподвижной точкой для перестановки P, если P[i] = i. Например, в перестановке 1,3,4,2,5 ровно две неподвижных точки: 1 и 5, а перестановка 4,3,2,1 не имеет неподвижных точек.Даны два числа: n и k. Найдите количество перестановок размера n с ровно k неподвижными точками.",
              data: "https://qwertycamedy.ru/sites/it-quiz/dots/dots.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/dots/dotsAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 17,
              title: "Игра - 2",
              body: "Вы любите играть в игры? Конечно, любите! Но про эту игру, возможно, ничего не знаете и не слышали даже. Что ж, расскажем о новой игре. На доске написана последовательность n целых чисел. Играют двое. На очередном ходе игрок выбирает число с правого или с левого края последовательности, затем это число стирается и последовательность становится на одно число меньше, а ход переходит к противнику. Выигрывает тот, кто наберет в сумме больше. Написать программу, определяющую победителя в конкретной игре, при условии, что игроки будут играть оптимально.",
              data: "https://qwertycamedy.ru/sites/it-quiz/game/game.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/game/gameAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 18,
              title: "Драконы",
              body: "Известно, что у дракона может быть несколько голов и его сила определяется числом голов. Но как определить силу драконьей стаи, в которой несколько драконов и у каждого из них определенное число голов? Вероятно, вы считаете, что это значение вычисляется как сумма всех голов? Это далеко не так, иначе было бы слишком просто вычислить силу драконьей стаи. Оказывается, что искомое значение равно произведению значений числа голов каждого из драконов. Например, если в стае 3 дракона, у которых 3, 4 и 5 голов соответственно, то сила равна 3*4*5 = 60. Предположим, что нам известно суммарное количество голов драконьей стаи, как нам вычислить максимально возможное значение силы этого логова драконов? Именно эту задачу Вам и предстоит решить.",
              data: "https://qwertycamedy.ru/sites/it-quiz/dragon/dragon.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/dragon/dragonAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 19,
              title: "Число E",
              body: "Выведите в выходной файл округленное до n знаков после десятичной точки число E. В данной задаче будем считать, что число Е в точности равно 2.7182818284590452353602875.",
              data: "https://qwertycamedy.ru/sites/it-quiz/e/e.txt",
              answer: "https://qwertycamedy.ru/sites/it-quiz/e/eAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 20,
              title: "Произведение цифр",
              body: "Требуется найти наименьшее натуральное число Q такое, что произведение его цифр равно заданному числу N.",
              data: "https://qwertycamedy.ru/sites/it-quiz/multiply/multiply.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/multiply/multiplyAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 21,
              title: "Двоичная система счисления",
              body: "Перевести целое десятичное число в двоичную систему счисления",
              data: "https://qwertycamedy.ru/sites/it-quiz/binary/binary.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/binary/binaryAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 22,
              title: "ФИО",
              body: "Ввести с клавиатуры в одну строку фамилию, имя и отчество, разделив их пробелом. Вывести фамилию и инициалы.",
              data: "https://qwertycamedy.ru/sites/it-quiz/fio/fio.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/fio/fioAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 23,
              title: "Мороженное",
              body: "В кафе мороженое продают по три шарика и по пять шариков. Можно ли купить ровно k шариков мороженого?\n\nВходные данные\nВводится число k (целое,положительное)\n\nВыходные данные\nПрограмма должна вывести слово YES, если при таких условиях можно набрать ровно k шариков (не больше и не меньше), в противном случае - вывести NO.",
              data: "https://qwertycamedy.ru/sites/it-quiz/icecream/icecream.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/icecream/icecreamAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 24,
              title: "Квадратное уравнение",
              body: "Найти корни квадратного уравнения по коэффициентам a,b,c.",
              data: "https://qwertycamedy.ru/sites/it-quiz/eq/eq.txt",
              answer: "https://qwertycamedy.ru/sites/it-quiz/eq/eqAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 25,
              title: "Реверс",
              body: "Вводится целое число. Вывести число, обратное введенному по порядку составляющих его цифр. Например, введено 3425, надо вывести 5243.",
              data: "https://qwertycamedy.ru/sites/it-quiz/reverse/reverse.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/reverse/reverseAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 26,
              title: "Фибоначчи",
              body: "Последовательность Фибоначчи определяется так:φ0=0, φ1=1, ..., φn=φn-1+φn-2. По данному числу n определите n-е число Фибоначчи φn.",
              data: "https://qwertycamedy.ru/sites/it-quiz/fib/fib.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/fib/fibAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 27,
              title: "Сумма цифр",
              body: "Вычислить сумму цифр числа N",
              data: "https://qwertycamedy.ru/sites/it-quiz/sum/sum.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/sum/sumAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 28,
              title: "Количество четных элементов последовательности",
              body: "Определите количество четных элементов в последовательности",
              data: "https://qwertycamedy.ru/sites/it-quiz/even/even.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/even/evenAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 29,
              title: "Ноль или не ноль",
              body: "Проверьте, содержит ли число N цифру ноль",
              data: "https://qwertycamedy.ru/sites/it-quiz/zero/zero.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/zero/zeroAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
            {
              id: 30,
              title: "Одинаковые числа",
              body: "Дан список чисел, найдите количество повторений одного и того же числа",
              data: "https://qwertycamedy.ru/sites/it-quiz/eqAr/eqAr.txt",
              answer:
                "https://qwertycamedy.ru/sites/it-quiz/eqAr/eqArAnswers.txt",
              isCompleted: false,
              isSuccess: false,
            },
          ],
        });
      }
    }
  };

  return (
    <MyModal>
      <TextField
        value={nickname}
        onChange={handleNickname}
        label="Уникальный ник"
        variant="outlined"
      />
      <TextField
        value={password}
        onChange={handlePassword}
        label="Пароль"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />
      <Button variant="contained" onClick={onSignIn}>
        Вперед!
      </Button>
    </MyModal>
  );
};

export default AuthModal;
