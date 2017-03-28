/**
 * DIA 2: OPERADORES
 */

function main (mealCost, tipPercent, taxPercent) {
	var mealCost = mealCost;
	var tipPercent = tipPercent;
	var taxPercent = taxPercent;

	var tip = mealCost*(tipPercent/100.00);
	var tax = mealCost*(taxPercent/100.00);

	var totalCost = Math.round(mealCost + tip + tax);

	console.log("The total meal cost is " + totalCost + " dollars.");
}

main(12, 20, 8);