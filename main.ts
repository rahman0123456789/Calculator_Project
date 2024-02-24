// Calculator Project.


import inquirer from "inquirer";

do{

    let user = await inquirer.prompt([{

        type: "number",
        name: "numberOne",
        message: "Enter Your Number One: "
    
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter Your Number Two: "
    },{
    
        type: "list",
        name: "operator",
        choices: ["add","sub","mul","div"],
        message: "Enter Your Operator"
    }]);
    let result = 0;
    if(user.operator === "add"){
    
        result = user.numberOne + user.numberTwo;
        console.log(`${user.numberOne} + ${user.numberTwo} = ${result}`)
    };
    
     if(user.operator === "sub"){
    
        result = user.numberOne - user.numberTwo;
        console.log(`${user.numberOne} - ${user.numberTwo} = ${result}`)
    }
    
    if(user.operator === "mul"){
    
        result = user.numberOne * user.numberTwo;
        console.log(`${user.numberOne} * ${user.numberTwo} = ${result}`)
    }
    
    if(user.operator === "div"){
    
        result = user.numberOne / user.numberTwo;
        console.log(`${user.numberOne} / ${user.numberTwo} = ${result}`)
    };
    

}while(true);
