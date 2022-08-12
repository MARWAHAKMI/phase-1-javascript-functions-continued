// code your solution here
const saturdayFun = param => {
    if (param) return `This Saturday, I want to ${param}!`
    else return "This Saturday, I want to roller-skate!"
}

const mondayWork = param => {
    if (param) return `This Monday, I will ${param}.`
    else return 'This Monday, I will go to the office.'
}

const wrapAdjective = param => str => `You are ${param}${str}${param}!`

// Executions
console.log(saturdayFun())
console.log(saturdayFun("bathe my dog"))
console.log(mondayWork())
console.log(mondayWork("work from home"))
console.log(wrapAdjective("%")("a dedicated programmer"))