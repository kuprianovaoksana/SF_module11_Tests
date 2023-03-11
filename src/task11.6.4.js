const myPercent = 30;
const myNumber = 200;

function getPercent(percent, number) {
	if (typeof percent != "number" || typeof number != "number") {
		return "Данные неверны";
	} else {
		return number / 100 * percent;
	}
}

console.log(getPercent(myPercent, myNumber));

module.exports = getPercent;