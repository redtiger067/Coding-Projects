
/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
function dayRate(ratePerHour) {
    return 8*ratePerHour; 
  }
  


  /**
   * Calculates the number of days in a budget, rounded down
   *
   * @param {number} budget: the total budget
   * @param {number} ratePerHour: the rate per hour
   * @returns {number} the number of days
   */
  export function daysInBudget(budget, ratePerHour) {
    return Math.floor( budget / dayRate(ratePerHour) )
  }
  




  /**
   * Calculates the discounted rate for large projects, rounded up
   *
   * @param {number} ratePerHour
   * @param {number} numDays: number of days the project spans
   * @param {number} discount: for example 20% written as 0.2
   * @returns {number} the rounded up discounted rate
   */
  export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const Full_Price_Days = numDays % 22
    const Discount_Days = numDays - Full_Price_Days
    const Discount_Rate = 1 * discount
    const Discount_Price = dayRate(ratePerHour) - (dayRate(ratePerHour) * Discount_Rate)
    return Math.ceil((Discount_Price * Discount_Days)+ (Full_Price_Days * dayRate(ratePerHour)))
  }

  