/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let leng = prices.length;
    let maxp = 0;
    for(let i=0; i<=leng; i++){
        if(prices[i] < prices[i+1]){
            maxp += prices[i+1] - prices[i];
        }
    }
    return maxp;
};