console.log("Problem 4 - Roman Numerals")
function romanNumerals(value: number): string {
    if (value <= 0 || value > 3999){
        throw new Error("Angka harus berada di rentang 1 hingga 3999")
    }

    const romanSymbols: Record<number, string> = {
        1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X",
        40: "XL", 50: "L", 90: "XC", 100: "C",
        400: "CD", 500: "D", 900: "CM", 1000: "M"
    }

    let result = ""
    const sortedValue = Object.keys(romanSymbols).map(Number).sort((a, b) => b-a)

    for (const numeral of sortedValue){
        while (value >= numeral){
            result += romanSymbols[numeral]
            value -= numeral
        }
    }

    return result
}

// console.log(romanNumerals(4))
console.log(romanNumerals(9))