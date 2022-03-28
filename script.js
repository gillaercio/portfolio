document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

// LISTENERS FOR EVENTS
document.querySelector("#qtde").addEventListener("change", updatePrice);
document.querySelector("#js").addEventListener("change", updatePrice);
document.querySelector("#layout-yes").addEventListener("change", updatePrice);
document.querySelector("#layout-no").addEventListener("change", updatePrice);
document.querySelector("#deadline").addEventListener("change", function () {
    const deadline = document.querySelector("#deadline").value
    document.querySelector("label[for=deadline]").innerHTML = `Prazo: ${deadline} semanas`
    updatePrice()
})

// BUDGET CALCULATION
function updatePrice(){
    const qtde = document.querySelector("#qtde").value
    const hasJS = document.querySelector("#js").checked
    const includeLayout = document.querySelector("#layout-yes").checked
    const deadline = document.querySelector("#deadline").value
    
    let prize = qtde * 100;
    if (hasJS) prize *= 1.1
    if (includeLayout) prize += 500        
    let urgencyRate = 1 - deadline * 0.1;
    prize *= 1 + urgencyRate

    document.querySelector("#prize").innerHTML = `R$ ${prize.toFixed(2)}`
}