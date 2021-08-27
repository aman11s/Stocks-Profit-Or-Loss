const purchasePrice = document.querySelector("#purchase-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#message");


// function clickHandler() {
//     let purchasePriceValue = Number(purchasePrice.value);
//     let stockQuantityValue = Number(stockQuantity.value);
//     let currentPriceValue = Number(currentPrice.value);
//     let totalPurchasePrice = purchasePriceValue * stockQuantityValue;
//     let totalCurrentPrice = currentPriceValue * stockQuantityValue;
//     if(totalCurrentPrice > totalPurchasePrice) {
//         let profit = totalCurrentPrice - totalPurchasePrice;
//         let profitPercentage = (profit / totalPurchasePrice) * 100;
//         message.innerText = `You gained ${profitPercentage.toFixed(2)}%. Your total profit is ${profit.toFixed(2)}`
//     } else {
//         let loss = totalPurchasePrice - totalCurrentPrice;
//         let lossPercentage = (loss / totalPurchasePrice) * 100;
//         message.innerText = `You lost ${lossPercentage.toFixed(2)}%. Your total loss is ${loss.toFixed(2)}`
//     }
// }


function calculateProftAndLoss(purchase, quantity, current) {
    
    if(current > purchase) {
        let profit = (current - purchase) * quantity;
        let profitPercentage = (profit / purchase) * 100;
        showMessage(`You gained ${profitPercentage.toFixed(2)}%. Your total profit is ${profit.toFixed(2)}`)
    } else if(purchase > current) {
        let loss = (purchase - current) * quantity;
        let lossPercentage = (loss / purchase) * 100;
        showMessage(`You lost ${lossPercentage.toFixed(2)}%. Your total loss is ${loss.toFixed(2)}`)
    } else {
        showMessage("Neither profit nor loss!");
    }
}

