const { callbackify } = require("util")
const local = require("./hw11_5_tools/localModules")
console.log(local);


let sum_34_12 = local.sum(34, 12);
let subtr_2_3 = local.subtract(2, 3);
let prod_2_3 = local.multiply(2, 3);
let divid_34_12 = local.divide(34, 12);

console.log(sum_34_12);
console.log(subtr_2_3);
console.log(prod_2_3);
console.log(divid_34_12);
