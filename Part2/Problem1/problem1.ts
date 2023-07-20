console.log("Problem 1 - Fibonancci Number Top-Down")
function fiboTopDown(angka: number, memo: Record<number, number> = {}): number{
    if (angka <= 0) {
        throw new Error("Input harus lebih besari dari 0")
    }else if (angka === 1 || angka === 2) {
        return 1
    }else {
        memo[angka] = fiboTopDown(angka - 1, memo) + fiboTopDown(angka - 2, memo)
        return memo[angka]
    }
}

const angkaTopDown = 6
const result = fiboTopDown(angkaTopDown)
console.log(`Fibonanci Top Down ke-${angkaTopDown}: ${result}`)