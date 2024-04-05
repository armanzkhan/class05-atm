#! /usr/bin/env node
import inquirer from "inquirer";
//balance
let myBalance = 10000; //$
//pin
let myPin = 1935;
//**Welcome to the Atm */
console.log("              Welcome to the Automated Transition Machine          ");
let pinAnswer = await inquirer.prompt([
    { name: "pin", message: "Enter Your pin number", type: "number" },
]);
if (pinAnswer.pin === myPin) {
    console.log("Wellcome!!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "Operation",
            message: "Select Your operation",
            type: "list",
            choices: ["Balance", "Cash Withraw", "Fast Cash", "Cancel"],
        }
    ]);
    console.log(operationAns.Operation);
    if (operationAns.Operation === "Balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
    else if (operationAns.Operation === "Cash Withraw") {
        let amountAns = await inquirer.prompt([
            { name: "amount", message: "Enter Your Amount", type: "number" },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            // Assignment operators =, +=, -=
            myBalance -= amountAns.amount;
            console.log(`Your current account balance is: ${amountAns.amount} withdraw successfully`);
            console.log(`Your remaining account balance is: ${myBalance}`);
        }
    }
    // For Funds Transfer
    else if (operationAns.Operation === "Fast Cash") {
        let amountAns1 = await inquirer.prompt([
            { name: "selection", message: "Select Your Amount", type: "list", choices: ["1000", "5000", "10000", "20000"], },
        ]);
        if (amountAns1.selection > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            // Assignment operators =, +=, -=
            myBalance -= amountAns1.selection;
            console.log(`Your current account balance is: ${amountAns1.selection} withdraw successfully`);
            console.log(`Your remaining account balance is: ${myBalance}`);
        }
    }
    else if (operationAns.Operation === "Cancel") {
        console.log(`Your balance is: ${myBalance} The transaction has been cancelled`);
    }
}
else {
    console.log("An Invalid Operation");
}
