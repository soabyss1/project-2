let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    let appData = {
        budjet: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };
    let a1 = prompt("Введите обязательную статью расходов в этом месяце", "")
    let a2 = prompt("Введите обязательную статью расходов в этом месяце", "")
    let a3 = prompt("Во сколько обойдется?", "")
    let a4 = prompt("Во сколько обойдется?", "");
appData.expenses.a1 = a3;
appData.expenses.a2 = a4;
alert(appData.budjet / 30)



