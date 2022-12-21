function getMinimumChange(coins)  {
    let result = 0;
    let sum = coins[0] + coins[1];
    for (let i = 2; i < coins.length; i++) {
        result = sum + 1;
        const aux = sum + coins[i];
        if (coins[i+1] > aux) {
            break;
        }
        sum = aux;
    }
    return result;
}

const coins = [5, 7, 1, 1, 2, 3, 22]
const result = getMinimumChange(coins);
console.log(result);