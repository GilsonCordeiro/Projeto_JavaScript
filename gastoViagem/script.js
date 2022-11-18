/* Criar um objeto com 2 propriedade do tipo Array
 * Receitas []
 * Despesas []
 Criar funçao para calcular o total de delas
 */

  let family = {
      incomes: [2500,  320.65, 250.34, 360.98],
      expenses: [320.10, 128.77, 175.32, 1450.00]
  }
  function sum(array){
      let total = 0;
        for(let value of array){
            total += value
        }

    return total
  }

  function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0
    let balanceText = "negativo" 

    if(itsOk){
        balanceText = "positivo"
    }
    console.log(`Seu saldo é ${balanceText} : R$ ${total.toFixed(2)}`)
  }
  calculateBalance()