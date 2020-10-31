configuration = {
	1000: "M",
	900: "CM",
	500: "D",
	400: "CD",
	100: "C",
	90: "XC",
	50: "L",
	40: "XL",
	10: "X",
	9: "IX",
	5: "V",
	4: "IV",
	1: "I"
}

def numeral(number):
	roman = []
	for size in sorted(configuration,reverse=True):
		qty = int(number / size)
		number = number % size
		roman.append(configuration[size] * qty)
	return "".join(roman)

print(numeral(148))