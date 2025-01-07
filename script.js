let balance = 0.00;
let totalDeposit = 0.00;
let totalWithdraw = 0.00;

function deposit(){
    const inputAmount = document.getElementById("inputamount");
    const amount = parseFloat(inputAmount.value.trim());
    if(amount<=0){
        alert("Please Enter an amount greater than 0");
    }
    else{
        totalDeposit = totalDeposit + amount;
        balance = balance + amount;

        const depositBalance = document.getElementById("totaldeposit");
        const totalBalance = document.getElementById("totalbalance");

        depositBalance.innerHTML = `Tk ${totalDeposit.toFixed(2)}`;
        totalBalance.innerHTML = `Tk ${balance.toFixed(2)}`;
    }
}

function withdraw(){
    const inputAmount = document.getElementById("inputamount");
    const amount = parseFloat(inputAmount.value.trim());
    if(balance < amount){
        alert("You have not sufficient balance");
    }
    else{
        totalWithdraw = totalWithdraw + amount;
        balance = balance - amount;

        const withdrawBalance = document.getElementById("totalwithdraw");
        const totalBalance = document.getElementById("totalbalance");

        withdrawBalance.innerText = `Tk ${totalWithdraw.toFixed(2)}`;
        totalBalance.innerText = `Tk ${balance.toFixed(2)}`;
    }
}