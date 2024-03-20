// code your solution here
function saturdayFun(activity = "roller-skate"){
return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun());
console.log(saturdayFun("go swimming"));
function mondayWork(todo = "go to the office"){
    return`This Monday, I will ${todo}.`;
}
console.log(saturdayFun());
console.log(saturdayFun("go to my moms"));

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); 
